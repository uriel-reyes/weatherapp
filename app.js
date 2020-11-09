//used to import request, also need npm install request
const request = require('request');

const url = 'http://api.weatherstack.com/forecast?access_key=7e47d511e8e8942951b4348b80eed067&query=Austin&units=f';

//boilerplate for a simple request, json:true will parse the object into JSON
request({url:url, json:true}, (error, response) =>{
//we can now call response.body and a property of the object
console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out and it feels like ' + response.body.current.feelslike + ' degrees.');
}); 

