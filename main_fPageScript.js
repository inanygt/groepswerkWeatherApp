
    let btn = document.getElementById("goButton");
    
    btn.addEventListener('click', function () {
        let user = document.getElementById("user").value;
        let bdate = document.getElementById("bdate").value;
        let city = document.getElementById("city").value;
        let temp = document.getElementById("temp");

        let weather = document.getElementById("weather");
        let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
        fetch(url)
        .then(response => response.json())
        .then(data => {
        console.log(data);
        weather.innerHTML =`
        <p>Location: ${data.resolvedAddress}</p>
        <p>Temperature: ${data.currentConditions.temp}°C</p>
        <p>Current conditions: ${data.currentConditions.conditions}</p>`;
        })
        .catch(
        err => {
        alert("Wrong city name");
        console.log(err)
        });

        let loginObject = {
            user : user,
            bdate : bdate,
            city : city,
            temp : temperature
        };
        
        localStorage.setItem('loginObject', JSON.stringify(loginObject));
        window.location.href = "main_sPage.html";       
        });

// Jorian Fetch api 

 // click on button and call getWeather function

//  btn.addEventListener('click', getWeather());
//         function getWeather() {
//         let city = document.getElementById("city").value;
//         // let weather = document.getElementById("weather");
//         let url = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "?unitGroup=metric&include=current&key=P9J7ZGZ9SBGSZQTDBMT86WNN3&contentType=json";
//         fetch(url)
//         .then(response => response.json())
//         .then(data => {
//         console.log(data);
//         weather.innerHTML =`
//         <p>Location: ${data.resolvedAddress}</p>
//         <p>Temperature: ${data.currentConditions.temp}°C</p>
//         <p>Current conditions: ${data.currentConditions.conditions}</p>`;
//         }).catch(
//         err => {
//         alert("Wrong city name");
//         console.log(err)
//         });
//         }

    