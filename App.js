const geoCode = require("./utils/geoCode");
const getWeather = require("./utils/getWeather");
const location = process.argv[2];
if (!location) {
  console.log("no location provided");
} else {
  geoCode(location, (err, { longitude, latitude }) => {
    err
      ? console.log("Error :", err)
      : getWeather(longitude, latitude, (err, weather) => {
          err
            ? console.log("Error", err)
            : console.log(`Weather at ${location} ${weather} `);
        });
  });
}
