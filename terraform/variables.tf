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
    "zengech.com"       =
