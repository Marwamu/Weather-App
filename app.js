const apiKey = "387475101415870779f16fdfc6e13277";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?unites=metrics&q=berlin";

async function checkWeather(){
    const response = await fetch( apiURL + `&appid=${apiKey}`)
    var data = await response.json();
    console.log(data);
}

checkWeather();