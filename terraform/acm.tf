resource "aws_acm_certificate" "zengech" {
  domain_name               = var.domain_primary
  subject_alternative_names = concat([var.domain_primary], var.domain_secondary)
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_route53_zone" "primary" {
  name = var.domain_primary
}

resource "aws_route53_zone" "secondary" {
  name = "zengech.com"
}

# DNS validation records for ACM
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.zengech.domain_validation_options : dvo.domain_name => dvo
  }
  name    = each.value.resource_record_name
  type    = each.value.resource_record_type
  zone_id = lookup({
    var.domain_primary = aws_route53_zone.primary.id
    "zengech.com"     = aws_route53_zone.secondary.id
  }, each.key)
  records = [each.value.resource_record_value]
  ttl     = 300
}

resource "aws_acm_certificate_validation" "zengech" {
  certificate_arn         = aws_acm_certificate.zengech.arn
  validation_record_fqdns = values(aws_route53_record.cert_validation)[*].fqdn
}