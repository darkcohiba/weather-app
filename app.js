const request = require('postman-request');

const apiKeyWeather = 'db56fd11ee89595a2da699cbbda005b4';
const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKeyWeather}&query=New York`
const apiKeyMap = 'pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${apiKeyMap}`


request({ url: mapBoxUrl, json: true}, (error, response) => {
    console.log(response.body.features[0].bbox);
    });
