const request = require('postman-request');
const geocode = require('./utils/geocode');



callWeather('Boston', (error, data) => {
    if (error) {
        console.log('Error', error);
    } else {
        console.log('Data', data);
    }
}
);



geocode.callMapBox('Boston', (error, data) => {
        if (error) {
            console.log('Error', error);
        } else {
            console.log('Data', data);
        }
    }
);