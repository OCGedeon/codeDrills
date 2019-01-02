var request = require("request");
var inquirer = require("inquirer")

var api_key = "7cec010755a2e2313585856843d7bbb0";

var queryURL = "http://api.openweathermap.org/data/2.5/weather?units=imperial&APPID="+api_key+"&q=";

inquirer.prompt([
  {
    type: "input",
    message: "Which city do you want to see the weather for? ",
    name: "userCity"
  }
]).then(function(userChoice) {
  request(queryURL+userChoice.userCity, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      var cityWeather = JSON.parse(body);
      console.log(cityWeather.name, cityWeather.sys.country);
      console.log(cityWeather.weather[0].description)
    } else {
      console.log(error)
    }
  })
})
