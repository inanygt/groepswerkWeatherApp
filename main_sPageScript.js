let local = JSON.parse(localStorage.getItem('loginObject'));
let session = JSON.parse(sessionStorage.getItem('loginObject'));


let user = document.getElementById("user");
let bYear = document.getElementById("bYear");
let place = document.getElementById("place");
let age = document.getElementById("age");

user.innerHTML = local.user;
place.innerHTML = local.location;
bYear.innerHTML = local.bdate.slice(0, 4);

const currentYear = new Date().getFullYear();
let cAge = currentYear - local.bdate.slice(0, 4);
age.innerHTML = cAge;




// console.log(cAge)