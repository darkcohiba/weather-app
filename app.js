const request = require('postman-request');

const apiKeyWeather = 'db56fd11ee89595a2da699cbbda005b4';
const city = 'New York';
const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKeyWeather}&query=${city}`;
const apiKeyMap = 'pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'
const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?proximity=ip&access_token=${apiKeyMap}`

function callWeather(){
    request({ url: weatherUrl, json: true}, (error, response) => {
        if (error) {
            console.log('Unable to connect to weather service!');
        } else if (response.body.error) {
            console.log('Unable to find location');
        }else {
            console.log(response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
        }
        });
}

function callMapBox(){
        request({ url: mapBoxUrl, json: true}, (error, response) => {
            if (error) {
                console.log("Unable to connect to location services!");
            } else if (response.body.features[0] === undefined) {
                console.log('Unable to find location. Try another search.');
            } else {
                const latitude = response.body.features[0].center[1];
                const longitude = response.body.features[0].center[0];
                console.log(`latitude is ${latitude}, longitude is ${longitude}`);
            }
        });
}