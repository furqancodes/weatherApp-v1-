let request = require("request");

// let apiKey = "0cf0be7893b5207a72d08d4fab3cd186";
// let city = "lahore";
// let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

// request({ url: url, json: true }, function (err, response, body) {
//   const { weather, main } = body;
//   console.log(weather[0].main, main);
// });
const url =
  "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiZnVycWFuMDkiLCJhIjoiY2tpMzhkdjluMDI4dTJxbnU2eDBycGhhdCJ9.0dvYSFgJDcMR03CnioJx3Q&limit=1";
request({ url: url, json: true }, function (err, response, body) {
  //   const { weather, main } = body;
  console.log(`${response.body.features[0].center[0]} longitude`);
  console.log(`${response.body.features[0].center[1]} latitude`);
});
