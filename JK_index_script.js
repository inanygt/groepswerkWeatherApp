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
        .then((data) => console.log(data));
        console.log(city)
    },
    displayWeather: function(data) {
        weather.innerHTML =`
        location: $(data.location.name)
        temperature: $(data.currentConditions.temp) °C
        Current conditions: $(data.currentConditions.conditions)`;

    }
  };
