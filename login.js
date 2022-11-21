
    let goButton = document.getElementById("goButton");
    goButton.addEventListener('click', function () {
        let user = document.getElementById("user").value;
        let bdate = document.getElementById("bdate").value;
        let city = document.getElementById("city").value;
        console.log(user, bdate, location)

        let loginObject = {
            user : user,
            bdate : bdate,
            city : city
        }
        
        localStorage.setItem('loginObject', JSON.stringify(loginObject));
        window.location.href = "JK_index.html";

        
        });


    