
variable "project_name" {
  default = "zengech"
}

variable "domain_primary" {
  default = "zengech.co.uk"
}

variable "domain_alternatives" {
  default = [
    "www.zengech.co.uk",
    "zengech.com",
    "www.zengech.com"
  ]
}

variable "site_bucket_name" {
  default = "zengech-co-uk-site"
}

variable "redirect_bucket_names" {
  default = {
    "zengech.com"       = "zengech-com-redirect"
    "www.zengech.com"   = "zengech-www-com-redirect"
    "www.zengech.co.uk" = "zengech-www-co-uk-redirect"
  }
}

variable "domain_alternatives_json" {
  type = string
}

variable "redirect_bucket_names_json" {
  type = string
}

locals {
  domain_alternatives     = jsondecode(var.domain_alternatives_json)
  redirect_bucket_names   = jsondecode(var.redirect_bucket_names_json)
}