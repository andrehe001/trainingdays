@minLength(3)
@maxLength(8)
@description('Name of environment')
param env string = 'devd5'

var cosmosAccount = 'cosmos-scm-${env}-${uniqueString(resourceGroup().id)}'
// var location = resourceGroup().location
param location string  = 'westeurope'

// CosmosDB Account
resource cosmos 'Microsoft.DocumentDB/databaseAccounts@2021-03-15' = {
  name: cosmosAccount
  location: location
  kind: 'GlobalDocumentDB'
  properties: {
    consistencyPolicy: {
      defaultConsistencyLevel: 'Eventual'
    }
    databaseAccountOfferType: 'Standard'
    locations: [
      {
        // locationName: resourceGroup().location
        locationName: location
        failoverPriority: 0
        isZoneRedundant: false
      }
    ]
    enableAutomaticFailover: false
    enableMultipleWriteLocations: false
  }
}
