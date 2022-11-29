const request = require('postman-request');
const geocode = require('./utils/geocode');
const weather = require('./utils/weather');
const math = require('./utils/math');
const locationOI = process.argv[2];
// console.log(locationOI)

getWetherByLocation(locationOI);
function getWetherByLocation(locationOI){
    return (
        locationOI ? 
            geocode.callMapBox(locationOI, (error, data) => {
                    if (error) {
                        return console.log('Error', error);
                    } else {
                        console.log(data.location);
                        weather.callWeather(data.location, (error, data) => {
                            if (error) {
                                console.log('Error', error);
                            } else {
                                console.log('Data', data);
                            }
                        });
                    }
                }
            )
            :
            console.log(
                'Please provide an address'
            )
    );
}
