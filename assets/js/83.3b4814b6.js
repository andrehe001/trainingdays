(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{939:function(e,a,t){"use strict";t.r(a);var r=t(35),s=Object(r.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"create-an-azure-function-on-linux-using-a-custom-container"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-function-on-linux-using-a-custom-container"}},[e._v("#")]),e._v(" Create an Azure Function on Linux using a custom container")]),e._v(" "),t("h2",{attrs:{id:"here-is-what-you-will-learn"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#here-is-what-you-will-learn"}},[e._v("#")]),e._v(" Here is what you will learn")]),e._v(" "),t("ul",[t("li",[e._v("Create an Azure Function that uses a BlobTrigger")]),e._v(" "),t("li",[e._v("Build a custom image using Docker")]),e._v(" "),t("li",[e._v("Run the container on your local development machine")]),e._v(" "),t("li",[e._v("Run the container in Azure Container Instances")])]),e._v(" "),t("p",[e._v("In this challenge you will learn how to use the Azure function runtime in a custom docker image. To get familiar with running the Azure function runtime in a custom docker image a sample Azure function is already created for you. The sample function listens for files in a StorageAccount (Blob). Each time a file is uploaded to a predefined container, the sample fumction is triggered and it receives the uploaded Blob. The blob is resized and stored to another location.\nThe sample Azure Function can be found "),t("a",{attrs:{href:"../apps/dotnetcore/BlobTriggerFunction"}},[e._v("here in day6/apps/dotnetcore/BlobTriggerFunction")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"run-the-azure-function-on-your-local-machine-with-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-azure-function-on-your-local-machine-with-docker"}},[e._v("#")]),e._v(" Run the Azure function on your local machine with docker")]),e._v(" "),t("h3",{attrs:{id:"create-an-azure-storage-account"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-storage-account"}},[e._v("#")]),e._v(" Create an Azure Storage account")]),e._v(" "),t("p",[e._v("Open a shell and log in to your Azure subscription using Azure CLI.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az login\n")])])]),t("p",[e._v("After you have logged in create a resource group where you want to add an Azure Storage Account")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az group create -n "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" -l "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Azure region"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Now you can create the storage account and add two private containers. One container is used to store the raw images named 'originals' and the other container is used to store the processed images named 'processed'.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az storage account create --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("account name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --location eastus2 --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --kind StorageV2 --access-tier Hot --sku Standard_LRS\naz storage container create --name originals --account-name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("storage account name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\naz storage container create --name processed --account-name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("storage account name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("p",[e._v("Query the connection string and note it down.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az storage account show-connection-string --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("storage account name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"build-the-custom-image-using-docker"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#build-the-custom-image-using-docker"}},[e._v("#")]),e._v(" Build the custom image using Docker")]),e._v(" "),t("p",[e._v("To build the docker image open a shell and navigate to the application folder 'day6/apps/dotnetcore/BlobTriggerFunction' and run the following docker command to build the image.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" build -t blobtriggerfunction:0.1 "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v(".")]),e._v("\n")])])]),t("h3",{attrs:{id:"run-the-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#run-the-image"}},[e._v("#")]),e._v(" Run the image")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" run -it -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("StorageAccountConnectionString")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<your storage connectionstring>'")]),e._v(" -e "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AzureWebJobsStorage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<your storage connectionstring>'")]),e._v(" blobtriggerfunction:0.1\n")])])]),t("h3",{attrs:{id:"see-it-in-action"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-it-in-action"}},[e._v("#")]),e._v(" See it in action")]),e._v(" "),t("p",[e._v("Open the 'Azure Storage Explorer' and navigate to your Storage Account. Expand the Storage Account and you should see three containers under 'Blob Containers'. The '$logs' container is for diagnostic logs of the Storage Account. Go the the 'originals' container and upload an image. After the image was uploaded you should see a new output in your shell window where you started the docker container. Now navigate to the 'processed' container and you should see a new blob withe the prefix 'proc_'.")]),e._v(" "),t("h3",{attrs:{id:"housekeeping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#housekeeping"}},[e._v("#")]),e._v(" Housekeeping")]),e._v(" "),t("p",[e._v("Quit the running container by pressing Ctrl+C.\nList all containers on your local machine")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("ps")]),e._v(" -a\n")])])]),t("p",[e._v("Delete the blobtriggerfunction:0.1 container by specifying the container id.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker rm <container id>\n")])])]),t("h2",{attrs:{id:"deploy-the-docker-image-to-azure-container-instances-aci"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-the-docker-image-to-azure-container-instances-aci"}},[e._v("#")]),e._v(" Deploy the docker image to Azure Container Instances ACI")]),e._v(" "),t("p",[e._v("Azure Container Instances offers the fastest and simplest way to run a container on Azure, without having to manage any virtual machines. Azure Container Instances is a great solution for any scenario that can operate in isolated containers, including simple applications, task automation and build jobs. Take a look at the documentation "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/container-instances/container-instances-overview",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" to get more information about Azure Container Instances.")]),e._v(" "),t("h3",{attrs:{id:"create-an-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-container-registry"}},[e._v("#")]),e._v(" Create an Azure container registry")]),e._v(" "),t("p",[e._v("If you already have created an Azure container registry you can skip this step.")]),e._v(" "),t("p",[e._v("Before you can create a Azure container registry, you need a resource group to deploy it to.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az group create --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --location westeurope\n")])])]),t("p",[e._v("Once you have created the resource group, create an Azure container registry. The container registry name must be unique within Azure.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr create --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --sku Basic\n")])])]),t("h3",{attrs:{id:"log-in-to-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#log-in-to-container-registry"}},[e._v("#")]),e._v(" Log in to container registry")]),e._v(" "),t("p",[e._v("You must log in to your container registry before pushing images to it.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("az acr login --name <acr name>\n")])])]),t("h3",{attrs:{id:"tag-container-image"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#tag-container-image"}},[e._v("#")]),e._v(" Tag container image")]),e._v(" "),t("p",[e._v("To push a container image to a private registry like Azure Container Registry, you must first tag the image with the full name of the registry's login server.\nFirst get the full login server name for your Azure Container Registry.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr show --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --query loginServer --output table\n")])])]),t("p",[e._v("Now you can tag your image that must be pushed the Azure Container registry as follows:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" tag blobtriggerfunction:0.1 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/blobtriggerfunction:0.1\n")])])]),t("p",[e._v("Run docker images to see the new tagged image:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("docker images\n")])])]),t("h3",{attrs:{id:"push-the-image-to-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#push-the-image-to-azure-container-registry"}},[e._v("#")]),e._v(" Push the image to Azure Container Registry")]),e._v(" "),t("p",[e._v("Now you have tagged the "),t("em",[e._v("blobtriggerfunction:0.1")]),e._v(" image with the full login server name of your Azure Container registry and you can push it to the registry.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("docker")]),e._v(" push "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/blobtriggerfunction:0.1\n")])])]),t("h3",{attrs:{id:"list-images-in-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-images-in-azure-container-registry"}},[e._v("#")]),e._v(" List images in Azure Container registry")]),e._v(" "),t("p",[e._v("To verify that the image was pushed to your Azure Container registry you can either validate it by browsing to the Azure portal or you can list the images in your Azure Container registry with Azure CLI:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr repository list --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --output table\n")])])]),t("p",[e._v("If you want to see the tags for the image, do the following:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr repository show-tags --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --repository blobtriggerfunction --output table\n")])])]),t("h3",{attrs:{id:"access-your-azure-container-registry"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-your-azure-container-registry"}},[e._v("#")]),e._v(" Access your Azure Container registry")]),e._v(" "),t("p",[e._v("When you want to deploy an image that is hosted in a private Azure Container registry you must supply credentials to access the registry.\nA best practice is to create and configure an Azure Active Directory service principal with pull permission to your registry.")]),e._v(" "),t("p",[e._v("Another option is to use the Azure Container Registry's admin user name and password.")]),e._v(" "),t("h4",{attrs:{id:"service-principal"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#service-principal"}},[e._v("#")]),e._v(" Service principal")]),e._v(" "),t("p",[e._v("If you want to get into using a service principal for accessing your Azure Container Registry tahe a look at the documentation "),t("a",{attrs:{href:"https://docs.microsoft.com/azure/container-registry/container-registry-auth-aci",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(" and checkout the scripts to setup a service prinipal with pull permission to your Azure Container Registry.")]),e._v(" "),t("h4",{attrs:{id:"admin-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#admin-user"}},[e._v("#")]),e._v(" Admin user")]),e._v(" "),t("p",[e._v("If you want to use Azure Container Registry's admin credential enable the admin user first:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr update --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --admin-enabled "),t("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("true")]),e._v("\n")])])]),t("p",[e._v("After that you can query the admin credential:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az acr credential show --name "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acr name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),t("h3",{attrs:{id:"deploy-to-azure-container-instances"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploy-to-azure-container-instances"}},[e._v("#")]),e._v(" Deploy to Azure Container Instances")]),e._v(" "),t("p",[e._v("Now use the command "),t("em",[e._v("az container create")]),e._v(" to deploy the container. Use either the service principal id and password or the admin user name and password to access your Azure Container Registry.")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az container create --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --name blobtriggerfunction --image "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/blobtriggerfunction:0.1 --cpu "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --memory "),t("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),e._v(" --registry-login-server "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("acrLoginServer"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --registry-username "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("sp "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("id")]),e._v(" or admin"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --registry-password "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("sp or admin password"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --environment-variables "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("StorageAccountConnectionString")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<your storage connectionstring>'")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[e._v("AzureWebJobsStorage")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[e._v("'<your storage connectionstring>'")]),e._v("\n")])])]),t("p",[e._v("Within a few seconds you should receive an initial response from Azure. To view the state of the deployment, do the following:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az container show --resource-group "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("resource group name"),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --name blobtriggerfunction --query instanceView.state\n")])])]),t("h3",{attrs:{id:"view-application-and-container-logs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#view-application-and-container-logs"}},[e._v("#")]),e._v(" View application and container logs")]),e._v(" "),t("p",[e._v("Once the container is up and running view the log output of the container:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[e._v("az container logs --resource-group TEST-FUNC-RG --name blobtriggerfunction\n")])])]),t("h3",{attrs:{id:"see-it-in-action-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-it-in-action-2"}},[e._v("#")]),e._v(" See it in action")]),e._v(" "),t("p",[e._v("Now open Azure Storage Explorer again and upload some images to see the Azure function running in Azure Container Instances in action.")]),e._v(" "),t("h2",{attrs:{id:"housekeeping-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#housekeeping-2"}},[e._v("#")]),e._v(" Housekeeping")])])}),[],!1,null,null,null);a.default=s.exports}}]);