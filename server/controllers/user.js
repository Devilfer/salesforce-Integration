

var sf = require('node-salesforce');


/**
 * Get LogIn
 */
module.exports.LogIn = (req,res)=>{


var conn = new sf.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env. 
   loginUrl : 'https://login.salesforce.com' 
});
conn.login(username, password, function(err, userInfo) {
  if (err) {
     return console.error(err); 
    }
else{
  res.redirect('content/index');
}

  // Now you can get the access token and instance URL information. 
  // Save them to establish connection next time. 
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property 
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ... 
});

/**
 * Process Login
 */
module.exports.ProcessLogIn =  (req,res) =>{

  
var conn = new sf.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env. 
    loginUrl : 'https://login.salesforce.com', 
    clientId : '<your Salesforce OAuth2 client ID is here>',
    clientSecret : '<your Salesforce OAuth2 client secret is here>',
    redirectUri : '<callback URI is here>'
  }
});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information. 
  // Save them to establish connection next time. 
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property 
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ... 
});
}
  /*
(async () => {
 
  let sfConn = new SalesforceConnection();
 
  await sfConn.soapLogin({
    hostname: "login.salesforce.com",
    apiVersion: "39.0",
    username: "example@example.com",
    password: "MyPasswordMySecurityToken",
  });
 
  let recentAccounts = await sfConn.rest("/services/data/v39.0/query/?q="
    + encodeURIComponent("select Id, Name from Account where CreatedDate = LAST_WEEK"));
 
  for (let account of recentAccounts.records) {
    console.log("Account " + account.Name + " was created recently.");
  }
 
})().catch(ex => console.error(ex.stack));
*/
}

/*
module.exports.LogIn = (req,res)=>{


var conn = new sf.Connection({
  // you can change loginUrl to connect to sandbox or prerelease env. 
   loginUrl : 'https://login.salesforce.com' 
});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information. 
  // Save them to establish connection next time. 
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property 
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ... 
});

}


module.exports.ProcessLogIn =  (req,res) =>{

    var sf = require('node-salesforce');
var conn = new sf.Connection({
  oauth2 : {
    // you can change loginUrl to connect to sandbox or prerelease env. 
    loginUrl : 'https://login.salesforce.com', 
    clientId : '<your Salesforce OAuth2 client ID is here>',
    clientSecret : '<your Salesforce OAuth2 client secret is here>',
    redirectUri : '<callback URI is here>'
  }
});
conn.login(username, password, function(err, userInfo) {
  if (err) { return console.error(err); }
  // Now you can get the access token and instance URL information. 
  // Save them to establish connection next time. 
  console.log(conn.accessToken);
  console.log(conn.instanceUrl);
  // logged in user property 
  console.log("User ID: " + userInfo.id);
  console.log("Org ID: " + userInfo.organizationId);
  // ... 
});
}
*/