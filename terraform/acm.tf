resource "aws_acm_certificate" "zengech" {
  provider = aws.eu_west_2

  domain_name               = var.domain_primary
  subject_alternative_names = local.domain_alternatives
  validation_method         = "DNS"

  lifecycle {
    create_before_destroy = true
  }

  tags = {
    Name = "${var.project_name}-cert"
  }
}

resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      type   = dvo.resource_record_type
      record = dvo.resource_record_value
      zone_id = lookup(
        {
          for z in [aws_route53_zone.primary, aws_route53_zone.com] : z.name => z.zone_id
        },
        dvo.domain_name,
        aws_route53_zone.primary.zone_id
      )
    }
  }

  name    = each.value.name
  type    = each.value.type
  zone_id = each.value.zone_id
  ttl     = 60
  records = [each.value.record]
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
  provider                = aws.eu_west_2
  certificate_arn         = aws_acm_certificate.zengech.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
  depends_on = [aws_route53_record.cert_validation]
}
