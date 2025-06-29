resource "aws_acm_certificate" "zengech" {
  provider          = aws.global
  domain_name       = "zengech.co.uk"
  subject_alternative_names = [
    "www.zengech.co.uk",
    "zengech.com",
    "www.zengech.com"
  ]
  validation_method = "DNS"
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

# resource "aws_acm_certificate_validation" "cert" {
#   provider                = aws.global
#   certificate_arn         = aws_acm_certificate.zengech.arn
#   validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
# }