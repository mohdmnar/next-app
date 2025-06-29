variable "aws_region" {
  description = "AWS region for all resources"
  type        = string
  default     = "eu-west-2"
}

variable "domain_primary" {
  description = "Primary domain"
  type        = string
  default     = "zengech.co.uk"
}

variable "domain_secondary" {
  description = "Secondary domain to redirect"
  type        = list(string)
  default     = ["www.zengech.co.uk", "zengech.com", "www.zengech.com"]
}

variable "site_bucket_name" {
  description = "S3 bucket name for the static site"
  type        = string
  default     = "zengech.co.uk"
}

variable "cloudfront_default_root_object" {
  description = "Default root object for CloudFront"
  type        = string
  default     = "index.html"
}

variable "state_bucket" {
  description = "S3 bucket to store Terraform remote state"
  type        = string
}