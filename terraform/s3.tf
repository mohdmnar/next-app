resource "aws_s3_bucket" "site" {
  bucket = var.site_bucket_name

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  force_destroy = true
}

resource "aws_s3_bucket_policy" "public_read" {
  bucket = aws_s3_bucket.site.id

  policy = jsonencode({
    Version = "2012-10-17",
    Statement = [
      {
        Effect    = "Allow",
        Principal = "*",
        Action    = "s3:GetObject",
        Resource  = "${aws_s3_bucket.site.arn}/*"
      }
    ]
  })
}

resource "aws_s3_bucket" "redirects" {
  for_each = var.redirect_bucket_names

  bucket = each.value

  website {
    redirect_all_requests_to = "https://${var.domain_primary}"
  }

  force_destroy = true
}
