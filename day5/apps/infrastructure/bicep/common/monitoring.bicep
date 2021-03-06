@minLength(3)
@maxLength(8)
@description('Name of environment')
param env string = 'devd5'

@description('Resource tags object to use')
param resourceTag object

var appiName = 'appi-scm-${env}-${uniqueString(resourceGroup().id)}'
// var location = resourceGroup().location
param location string  = 'westeurope'
// ApplicationInsights
resource appi 'Microsoft.Insights/components@2015-05-01' = {
  name: appiName
  location: location
  tags: resourceTag
  kind: 'web'
  properties: {
    Application_Type: 'web'
  }
}
