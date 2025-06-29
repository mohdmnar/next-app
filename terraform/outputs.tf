output "cloudfront_domain_name" {
  description = "CloudFront distribution domain name"
  value       = aws_cloudfront_distribution.cdn.domain_name
}

output "route53_nameservers" {
  description = "Nameservers for the primary hosted zone"
  value       = aws_route53_zone.primary.name_servers
}

output "acm_certificate_arn" {
  description = "ARN of the validated ACM certificate"
  value       = aws_acm_certificate.zengech.arn
}