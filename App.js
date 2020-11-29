let request = require("request");

let apiKey = "0cf0be7893b5207a72d08d4fab3cd186";
let city = "lahore";
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

request({ url: url, json: true }, function (err, response, body) {
  const { weather, main } = body;
  console.log(weather[0].main, main);
});
