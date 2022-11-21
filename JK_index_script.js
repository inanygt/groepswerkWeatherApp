let local = JSON.parse(localStorage.getItem('loginObject'));
let session = JSON.parse(sessionStorage.getItem('loginObject'));
let city = localStorage.getItem('city');

let weather = {
    fetchWeather : function(city) {
        fetch(
            "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
            + city + 
            "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json")
        .then((Response) => Response.json())
        .then((data) => {
            console.log(data);
            weather.innerHTML = `
            location: $(data.location.name)
            temperature: $(data.current.temperature) °C
            current conditions: $(data.currentConditions.conditions)`;
        

    })}
