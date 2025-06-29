output "nameservers_uk" {
  value = aws_route53_zone.primary_uk.name_servers
}

output "nameservers_com" {
  value = aws_route53_zone.primary_com.name_servers
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.www.domain_name
}

output "acm_validation" {
  value = "Certificate validated: ${aws_acm_certificate_validation.cert.id}"
}