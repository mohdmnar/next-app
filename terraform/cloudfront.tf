resource "aws_cloudfront_origin_access_identity" "oai" {
  comment = "OAI for zengech.co.uk"
}

resource "aws_cloudfront_distribution" "www" {
  enabled             = true
  aliases             = keys(local.redirects)
  default_root_object = "index.html"

  # Primary origin (S3 bucket)
  origin {
    domain_name = aws_s3_bucket_website_configuration.primary.website_endpoint
    origin_id   = "primary"

    custom_origin_config {
      http_port              = 80
      https_port             = 443
      origin_protocol_policy = "http-only"
      origin_ssl_protocols   = ["TLSv1.2"]
    }
  }

  # Redirect origins
  dynamic "origin" {
    for_each = local.redirects
    content {
      domain_name = aws_s3_bucket_website_configuration.redirect[origin.key].website_endpoint
      origin_id   = "redirect-${origin.key}"

      custom_origin_config {
        http_port              = 80
        https_port             = 443
        origin_protocol_policy = "http-only"
        origin_ssl_protocols   = ["TLSv1.2"]
      }
    }
  }

  default_cache_behavior {
    target_origin_id       = "primary"
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]

    forwarded_values {
      query_string = false
      cookies { forward = "none" }
    }
  }

  # Cache behaviors for redirects
  dynamic "ordered_cache_behavior" {
    for_each = local.redirects
    content {
      path_pattern           = "*"
      target_origin_id       = "redirect-${ordered_cache_behavior.key}"
      viewer_protocol_policy = "redirect-to-https"
      allowed_methods        = ["GET", "HEAD"]
      cached_methods         = ["GET", "HEAD"]

      forwarded_values {
        query_string = false
        cookies { forward = "none" }
      }
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }

  viewer_certificate {
    acm_certificate_arn      = aws_acm_certificate.zengech.arn
    ssl_support_method       = "sni-only"
    minimum_protocol_version = "TLSv1.2_2021"
  }
}