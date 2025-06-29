# Hosted Zones
resource "aws_route53_zone" "primary_uk" {
  name = "zengech.co.uk"
}

resource "aws_route53_zone" "primary_com" {
  name = "zengech.com"
}

# A-records for CloudFront
resource "aws_route53_record" "uk" {
  zone_id = aws_route53_zone.primary_uk.zone_id
  name    = "zengech.co.uk"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_uk" {
  zone_id = aws_route53_zone.primary_uk.zone_id
  name    = "www.zengech.co.uk"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "com" {
  zone_id = aws_route53_zone.primary_com.zone_id
  name    = "zengech.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_com" {
  zone_id = aws_route53_zone.primary_com.zone_id
  name    = "www.zengech.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.www.domain_name
    zone_id                = aws_cloudfront_distribution.www.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.zengech.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
      zone   = replace(dvo.domain_name, "/^www\\./", "")  # Extract base domain
    }
  }

  zone_id = (
    endswith(each.value.zone, "zengech.com") 
    ? aws_route53_zone.primary_com.zone_id 
    : aws_route53_zone.primary_uk.zone_id
  )
  name            = each.value.name
  type            = each.value.type
  records         = [each.value.record]
  ttl             = 60
  allow_overwrite = true
}