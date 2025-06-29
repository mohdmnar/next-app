# Primary site bucket
resource "aws_s3_bucket" "primary" {
  bucket = "zengech.co.uk"
}

resource "aws_s3_bucket_website_configuration" "primary" {
  bucket = aws_s3_bucket.primary.bucket
  index_document { suffix = "index.html" }
}

# Redirect buckets
locals {
  redirects = {
    "www.zengech.co.uk" = "zengech.co.uk"
    "zengech.com"       = "zengech.co.uk"
    "www.zengech.com"   = "zengech.co.uk"
  }
}

resource "aws_s3_bucket" "redirect" {
  for_each = local.redirects
  bucket   = each.key
}

resource "aws_s3_bucket_website_configuration" "redirect" {
  for_each = local.redirects
  bucket   = aws_s3_bucket.redirect[each.key].bucket

  redirect_all_requests_to {
    host_name = each.value
    protocol  = "https"
  }
}