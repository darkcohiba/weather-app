//https://weatherstack.com/dashboard weather docs
const apiKeyWeather = 'db56fd11ee89595a2da699cbbda005b4';


function callWeather(city, callback){
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${apiKeyWeather}&query=${city}`;
    request({ url: weatherUrl, json: true}, (error, response) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        }else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelslike + ' degrees out.');
        }
        });
}