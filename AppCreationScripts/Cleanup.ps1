[CmdletBinding()]
param(
    [Parameter(Mandatory = $True, HelpMessage = 'Tenant ID (This is a GUID which represents the "Directory ID" of the AzureAD tenant into which you want to create the apps')]
    [string] $tenantId
)

#Requires -Modules Microsoft.Graph.Applications -RunAsAdministrator

# Pre-requisites
if ($null -eq (Get-Module -ListAvailable -Name "Microsoft.Graph.Applications")) {
    Install-Module "Microsoft.Graph.Applications" -Scope CurrentUser
}

Import-Module Microsoft.Graph.Applications

$ErrorActionPreference = "Stop"

Function Cleanup {
    <#.Description
        This function removes the Azure AD applications for the sample. These applications were created by the Configure.ps1 script
    #>

    # Connect to the Microsoft Graph API
    Write-Host "Connecting Microsoft Graph"
    Connect-MgGraph -TenantId $TenantId -Scopes "Application.ReadWrite.All"

    # Removes the applications
    Write-Host "Removing 'spa' (iui-tourist-portal) if needed"
    Get-MgApplication -Filter "DisplayName eq 'iui-tourist-portal'"  | ForEach-Object { Remove-MgApplication -ApplicationId $_.Id }
    $apps = Get-MgApplication -Filter "DisplayName eq 'iui-tourist-portal'"

    if ($apps) {
        Remove-MgApplication -ApplicationId $apps.Id
    }

    foreach ($app in $apps) {
        Remove-MgApplication -ApplicationId $apps.Id
        Write-Host "Removed iui-tourist-portal"
    }

    # also remove service principals of this app
    Get-MgServicePrincipal -filter "DisplayName eq 'iui-tourist-portal'" | ForEach-Object { Remove-MgServicePrincipal -ApplicationId $_.Id -Confirm:$false }

}

Cleanup -tenantId $TenantId
