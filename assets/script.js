const apiKey = "ecef5ad8043c8002cf9ddea36591b218";
const weatherNow = document.getElementById("weatherNow");
const dayContainer = document.getElementById("dayContainer");
const submit = document.getElementById("submit");


const apiURL = `api.openweathermap.org/data/2.5/forecast?q={cityName}&appid={ecef5ad8043c8002cf9ddea36591b218}`;
// const apiURL = `api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid=${ecef5ad8043c8002cf9ddea36591b218}`;