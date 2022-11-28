const request = require('postman-request');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');






geocode.callMapBox('Boston', (error, data) => {
        if (error) {
            return console.log('Error', error);
        } else {
            console.log('Data', data);
            weather.callWeather(data.location, (error, data) => {
                if (error) {
                    console.log('Error', error);
                } else {
                    console.log('Data', data);
                }
            });
        }
    }
);