# Node.JS Server App using RingCentral SDK

Authentication Demo for RingCentral App using JWT Auth Flow. For more information please refer this guide: https://developers.ringcentral.com/guide/authentication

![alt text](https://netstorage.ringcentral.com/dpw/guide/images/oauth-password-flow.png?v=2022-03-04![image](https://user-images.githubusercontent.com/395039/160492127-9ee3b298-e1aa-43c8-88ac-5fd581596d5a.png)
)

## Pre-Requisite

- Have an existing an application on RingCentral Developer Portal. **To create a new app using JWT Flow, please refer to this guide:** https://developers.ringcentral.com/guide/authentication/jwt/config-app
- Follow this guide to create your JWT Credential : https://developers.ringcentral.com/guide/authentication/jwt/create-jwt
- Make sure the application has the ReadAccounts, ReadCallLog permissions.

## Clone & Configure project 

- ```$ npm install```
- Open .env file and update it with your sandbox application credentials (RC_CLIENT_ID, RC_CLIENT_SECRET)
- Set RC_REDIRECT_URL to 'http://localhost:5000/oauth2callback', make sure that is also the `OAuth Redirect URI` in your application settings


## Run the demo

- ```$ node index.js```
- On a Web browser, open to http://localhost:5000 
- Click 'Login with RingCentral' and follow the wizard to authenticatate
- Call any APIs to test the app


