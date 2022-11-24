const request = require('postman-request');

const apiKeyWeather = 'db56fd11ee89595a2da699cbbda005b4';
const city = 'New York';
const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKeyWeather}&query=${city}`;
const apiKeyMap = 'pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'


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

function callMapBox(address, callback) {
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/` + address + `.json?access_token=${apiKeyMap}`;

        request({ url: mapBoxUrl, json: true}, (error, response) => {
            if (error) {
                callback("Unable to connect to location services!", undefined);
            } else if (response.body.features[0] === undefined) {
                callback('Unable to find location. Try another search.', undefined);
            } else {
                const latitude = response.body.features[0].center[1];
                const longitude = response.body.features[0].center[0];
                callback(undefined, `latitude is ${latitude}, longitude is ${longitude}`);
            }
        });
}

callMapBox('Boston', (error, data) => {
    console.log('Error', error);
    console.log('Data', data);
    }
);