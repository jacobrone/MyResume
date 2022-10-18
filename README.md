# MyResume

This is my resume following the [ACG project video.]()

## Setup the website files and created the visitor counter

- the frontend folder contains the website
- created main.js - this file contains the visitor counter code
- the backend folder contains the api

## Setup database resource and created the function to call the dabase

- created the CosmosDB resource in Azure
- created the GetResumeCounter function in the backend folder
- GetResumeCounter.cs file contains the function call and database bindings for CosmosDB to pull and update the count in the datbase
- created counter.cs - this file contains the the counter class

## Deployed function to Azure

- deoplyed the fucntion app to Azure
- updated app settings to include the AzureResumeConnectionString
- updated the funtionApiUrl to the production URL

## Deployed Static site

- deployed azure blob storage resource
- deployed frontend to azure storage account

## Azure Content Delivery Network

- created the CDN endpoint in Azure
- secured CDN endpoint with valid domian name and https

## Setup CI/CD pipeline using github

- created the .github folder that contains the front and backend workflows for updates to the website files
- created and added frontend workflow to automate content delivery and updates to the websites frontend

## Unit tests and backend worflow

- implemented unit testing for the GetResumeCounter.cs function
- added code to the backend workflow to automate updates to the backend