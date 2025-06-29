# Primary domain A record alias to CloudFront
resource "aws_route53_record" "primary_alias" {
  zone_id = aws_route53_zone.primary.id
  name    = var.domain_primary
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# Alias for www.primary
resource "aws_route53_record" "www_alias" {
  zone_id = aws_route53_zone.primary.id
  name    = "www.${var.domain_primary}"
  type    = "A"
  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# Secondary zones aliases (redirects handle in CloudFront alias list)
resource "aws_route53_record" "secondary_aliases" {
  for_each = toset(var.domain_secondary)
  zone_id  = each.key == "www.zengech.co.uk" || each.key == var.domain_primary ? aws_route53_zone.primary.id : aws_route53_zone.secondary.id
  name     = each.value
  type     = "A"
  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}