let local = JSON.parse(localStorage.getItem('loginObject'));
let session = JSON.parse(sessionStorage.getItem('loginObject'));


let user = document.getElementById("user");
let bYear = document.getElementById("bYear");
// let location = document.getElementById("location");

user.innerHTML = local.user;
// location.innerHTML = local.location;
bYear.innerHTML = local.bdate;