require('dotenv').config();

const RC = require('@ringcentral/sdk').SDK
const rcsdk = new RC({
    'server':       process.env.RC_SERVER_URL,
    'clientId':     process.env.RC_CLIENT_ID,
    'clientSecret': process.env.RC_CLIENT_SECRET
});
const platform = rcsdk.platform();

// login using JWT
platform.login({
    'jwt':  process.env.RC_JWT
})

platform.on(platform.events.loginSuccess, function(e){
    console.log("User logged in successfully");
    getAccountInfo("/restapi/v1.0/account/~", {})
});

async function getAccountInfo(endpoint, params) {
  try {
    let resp = await platform.get(endpoint, params)
    let jsonObj = await resp.json()
    console.log("Account Details:", jsonObj);
  } 
  catch (e) {
    console.log("Error occured: " + e.message)
  }
}