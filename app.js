//used to import request, also need npm install request
const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=7e47d511e8e8942951b4348b80eed067&query=Austin';

//boilerplate for a simple request, body is what displays the result
request(url, (error, response) =>{
//we create a const to store the response, and also parse it (the data we need lives inside the body property)    
    const data = JSON.parse(response.body);
    console.log(data.current);
})