let btn = document.getElementById('goButton');
btn.addEventListener('click', getWeather);

function getWeather() {
    let city = document.getElementById('city').value;
    let weather = document.getElementById('weather');
    let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/"
    + city + 
    "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";

    fetch(url)
       .then(response => response.json())
       .then(data => {
        console.log(data);
        weather.innerHTML =`
        location: $(data.location.name)
        temperature: $(data.currentConditions.temp) °C
        Current conditions: $(data.currentConditions.conditions)`;

       }).catch(
        err => {
            alert("Wrong city name");
            console.log(err);

        })
       
}