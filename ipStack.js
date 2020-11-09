
const request = require('request');
const requestPromise = require('request-promise');
//change to {{settings.client_ip_address}}
const ipAddress = '165.225.216.217';
const ipStack = 'a130f8621142c72ae8ca40e9f7ff7267';
const url = `http://api.ipstack.com/${ipAddress}?access_key=${ipStack}`

let ipState;

const url = `http://api.ipstack.com/${ipAddress}?access_key=${ipStack}`
//boilerplate for a simple request, json:true will parse the object into JSON
request({url:url, json:true}, (error, response) =>{
//we can now call response.body and a property of the object
console.log(response.body.region_code);
}); 
