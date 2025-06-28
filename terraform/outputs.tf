output "site_url" {
  value = "https://${var.domain_primary}"
}

output "cloudfront_domain" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "bucket_name" {
  value = aws_s3_bucket.site.bucket
}

output "zengech_co_uk_nameservers" {
  value = aws_route53_zone.primary.name_servers
}

output "zengech_com_nameservers" {
  value = aws_route53_zone.com.name_servers
}
