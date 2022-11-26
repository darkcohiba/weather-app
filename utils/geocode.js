const request = require('postman-request');
// https://docs.mapbox.com/api/search/geocoding/ mapbox docs
const apiKeyMap = 'pk.eyJ1IjoiZGFya2NvaGliYSIsImEiOiJjbDNkdzd5YmQwMDJzM2NuOGRjMzMybzlmIn0.zTD1-NwCvNlExYYFWxvzmQ'


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
                callback(undefined, {
                    latitude: latitude,
                    longitude: longitude,
                    location: response.body.features[0].place_name
                });
            }
        });
}

module.exports = {
    callMapBox: callMapBox
};


