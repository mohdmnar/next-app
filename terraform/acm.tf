resource "aws_acm_certificate" "zengech" {
  provider = aws.us_east_1

  domain_name               = var.domain_primary
  subject_alternative_names = var.domain_alternatives
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${var.project_name}-cert"
  }
}

resource "aws_route53_zone" "primary" {
  name = var.domain_primary
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.zengech.domain_validation_options : dvo.domain_name => {
      name  = dvo.resource_record_name
      type  = dvo.resource_record_type
      value = dvo.resource_record_value
    }
  }

  zone_id = aws_route53_zone.primary.zone_id
  name    = each.value.name
  type    = each.value.type
  records = [each.value.value]
  ttl     = 300
}

resource "aws_acm_certificate_validation" "zengech" {
  provider                = aws.us_east_1
  certificate_arn         = aws_acm_certificate.zengech.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
