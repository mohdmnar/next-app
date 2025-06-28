provider "aws" {
  region = "eu-west-2"
}

provider "aws" {
  alias  = "eu_west_2"
  region = "eu-west-2"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.0"
    }
  }
}
