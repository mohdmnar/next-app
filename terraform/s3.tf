# Primary site bucket
resource "aws_s3_bucket" "site" {
  bucket = var.site_bucket_name
  acl    = "public-read"

  website {
    index_document = var.cloudfront_default_root_object
    error_document = "error.html"
  }

  tags = {
    Name = "Zengech Static Site"
  }
}

# Redirect buckets for secondary domains
resource "aws_s3_bucket" "redirect" {
  for_each = toset(var.domain_secondary)
  bucket   = each.value
  acl      = "public-read"

  website {
    redirect_all_requests_to = {
      host_name = var.domain_primary
      protocol  = "https"
    }
  }
  tags = {
    Name = "Redirect ${each.value} to ${var.domain_primary}"
  }
}