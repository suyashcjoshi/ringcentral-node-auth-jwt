# Node.JS Server App demonstrating RingCentral JWT Login Flow

This application is bare minum example of how to setup a Node.js app using RingCentral's [Node.js SDK](https://www.npmjs.com/package/@ringcentral/sdk). and perform **server side uuthentication using JWT Flow** and then call platform API to extension information of the logged in user. For more information please refer this guide: https://developers.ringcentral.com/guide/authentication

![alt text](https://netstorage.ringcentral.com/dpw/guide/images/oauth-password-flow.png?v=2022-03-04![image](https://user-images.githubusercontent.com/395039/160492127-9ee3b298-e1aa-43c8-88ac-5fd581596d5a.png)
)

## Pre-Requisite

- Have an existing an application on RingCentral Developer Portal. **To create a new app using JWT Flow, please refer to this guide:** https://developers.ringcentral.com/guide/authentication/jwt/config-app
- Follow this guide to create your JWT Credential : https://developers.ringcentral.com/guide/authentication/jwt/create-jwt
- Make sure the application has the ReadAccounts, ReadCallLog permissions.

## Download & Configure project 

- ```$ git clone <this project>```
- ```$ npm install```
- Open the **.env** file and update it with your sandbox application credentials for RC_CLIENT_ID, RC_CLIENT_SECRET & RC_JWT values.Make sure not to publicly expose your application credentials.

## Run the demo

- ```$ node index.js```
- On a Web browser, open to http://localhost:5000 
- Open the console and inspect logs to see 'Extension Info' for the logged in user.


