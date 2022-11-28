const request = require('postman-request');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');


weather.callWeather('Boston', (error, data) => {
    if (error) {
        console.log('Error', error);
    } else {
        console.log('Data', data);
    }
}
);



// geocode.callMapBox('Boston', (error, data) => {
//         if (error) {
//             console.log('Error', error);
//         } else {
//             console.log('Data', data);
//         }
//     }
// );