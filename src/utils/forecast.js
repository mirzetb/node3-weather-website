const request = require("request")

const forecast = (lat, long, callback) => {
    const url = 'https://api.darksky.net/forecast/af46a228ad572dd1a896e4db4b815e16/' + lat + ',' + long

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service!")
        } else if (body.error) {
            callback("Unable to find location!")
        } else {
            callback(undefined, body.daily.data[0].summary + " It is currently " + body.currently.temperature + " degrees out. There is a " + body.currently.precipProbability + "% chance of rain.")
        }
    })
}

module.exports = forecast


