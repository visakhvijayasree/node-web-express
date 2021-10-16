const request = require('request')

const geocode = (address, callback) => {
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYW5kcmV3bWVhZDEiLCJhIjoiY2pvOG8ybW90MDFhazNxcnJ4OTYydzJlOSJ9.njY7HvaalLEVhEOIghPTlw&limit=1'

    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYXN0b25tYXJ0aW41NTgiLCJhIjoiY2t1bDdmeWNyMDF2ZzJwcDFyODVmOGloYiJ9.LkycWCateLJiCFXvpLo0jA&limit=1'

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            console.log("11")
            callback('Unable to connect to location services!', undefined)
        } else if (response.body.features.length === 0) {
            console.log("12")
            callback('Unable to find location. Try another search.', undefined)
        } else {
            console.log("33")
            callback(undefined, {

                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode