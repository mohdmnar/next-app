# Alias record for root domain (zengech.co.uk)
resource "aws_route53_record" "root" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = var.domain_primary
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# Alias record for www.zengech.co.uk
resource "aws_route53_record" "www_co_uk" {
  zone_id = aws_route53_zone.primary.zone_id
  name    = "www.${var.domain_primary}"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

# Add CNAME/alias records for zengech.com and www.zengech.com in their own hosted zone
# These hosted zones must exist in Route 53
resource "aws_route53_zone" "com" {
  name = "zengech.com"
}

resource "aws_route53_record" "zengech_com" {
  zone_id = aws_route53_zone.com.zone_id
  name    = "zengech.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}

resource "aws_route53_record" "www_zengech_com" {
  zone_id = aws_route53_zone.com.zone_id
  name    = "www.zengech.com"
  type    = "A"

  alias {
    name                   = aws_cloudfront_distribution.cdn.domain_name
    zone_id                = aws_cloudfront_distribution.cdn.hosted_zone_id
    evaluate_target_health = false
  }
}
