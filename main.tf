
# The configuration for the `remote` backend.
     terraform {
       backend "remote" {
         # The name of your Terraform Cloud organization.
         organization = "Org-DP"

         # The name of the Terraform Cloud workspace to store Terraform state files in.
         workspaces {
           name = "Project-Sigma"
         }
       }
     }

     # An example resource that does nothing.
     resource "null_resource" "example" {
       triggers = {
         value = "Push to terraform!"
       }
     }
