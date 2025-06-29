terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"  # ACM must be in us-east-1 for CloudFront
  alias  = "global"
}

provider "aws" {
  region = "eu-west-2"  # Primary region for resources
}