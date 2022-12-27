const express=require('express')
const app=express()
require('dotenv').config()

//genrate token
var jwt = require('jsonwebtoken');

var privateKey = 'mnew'
var publicKey = 'pppp'

var payload = { };
payload.userName = "Biswa";
payload.userId = "11223344"
payload.role = "Admin";

console.log("\n Payload: " + JSON.stringify(payload));

var iss = "Technosaviour";
var sub = "technosaviourcrypto@gmail.com";
var aud = "http://youtube.com/c/technosaviour";
var exp = "24h";

var signOptions = {
    issuer : iss,
    subject: sub,
    audience: aud,
    expiresIn: exp,
    algorithm: "RS256"
};
// Create the JWT Token
var token = jwt.sign(payload, privateKey, signOptions);

// Send this token to the client so that it can be used in subsecuent request
console.log("\n Token: " + token);




const port=process.env.PORT
app.listen(port,()=>{
    console.log(`port is running on ${port}`)
})