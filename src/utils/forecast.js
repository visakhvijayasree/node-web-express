const request = require('request')


const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=c0e7ac185a8b2fb66675d5abc6e373d8&query=${latitude},${longitude}`;
    // http: //api.weatherstack.com/current?access_key=c0e7ac185a8b2fb66675d5abc6e373d8&query =-71.0596,42.3605 
    console.log("url", url)
    request({ url: url, json: true }, (err, data) => {
        if (err) {
            callback("error1")
        } else if (data.body.error) {
            callback("error12")
        } else {
            callback(undefined, data.body.current.weather_descriptions)
        }
    })
}

module.exports = forecast