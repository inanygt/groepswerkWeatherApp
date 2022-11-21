let local = JSON.parse(localStorage.getItem('loginObject'));
let session = JSON.parse(sessionStorage.getItem('loginObject'));


let user = document.getElementById("user");
let bYear = document.getElementById("bYear");
let place = document.getElementById("place");
let age = document.getElementById("age");

user.innerHTML = local.user;
place.innerHTML = local.location;

birthYear = local.bdate.slice(0, 4)
bYear.innerHTML = birthYear;

const currentYear = new Date().getFullYear();
let cAge = currentYear - local.bdate.slice(0, 4);
age.innerHTML = cAge;

 // Zodiac

if (
   birthYear == 1948 || 
   birthYear == 1960 || 
   birthYear == 1972 ||
   birthYear == 1984 ||
   birthYear == 1996 ||
   birthYear == 2008 ||
   birthYear == 2020 
   ) {
   let zodiac = document.getElementById("zodiac").src = "Images/zodiac/rat.webp";
}
   if (
   birthYear == 1949 || 
   birthYear == 1961 || 
   birthYear == 1973 ||
   birthYear == 1985 ||
   birthYear == 1997 ||
   birthYear == 2009 ||
   birthYear == 2021 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/ox.jpeg";
}

if (
   birthYear == 1950 || 
   birthYear == 1962 || 
   birthYear == 1974 ||
   birthYear == 1986 ||
   birthYear == 1998 ||
   birthYear == 2010
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/tiger.jpeg";
}

if (
   birthYear == 1951 || 
   birthYear == 1963 || 
   birthYear == 1975 ||
   birthYear == 1987 ||
   birthYear == 1999 ||
   birthYear == 2011
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/rabbit.jpeg";
}

if (
   birthYear == 1952 || 
   birthYear == 1964 || 
   birthYear == 1976 ||
   birthYear == 1988 ||
   birthYear == 2000 ||
   birthYear == 2012 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/dragon.png";
}

if (
   birthYear == 1953 || 
   birthYear == 1965 || 
   birthYear == 1977 ||
   birthYear == 1989 ||
   birthYear == 2001 ||
   birthYear == 2013 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/snake.jpeg";
}

if (
   birthYear == 1954 || 
   birthYear == 1966 || 
   birthYear == 1978 ||
   birthYear == 1990 ||
   birthYear == 2002 ||
   birthYear == 2014 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/horse.jpeg";
}

if (
   birthYear == 1955 || 
   birthYear == 1967 || 
   birthYear == 1979 ||
   birthYear == 1991 ||
   birthYear == 2003 ||
   birthYear == 2015 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/goat.png";
}

if (
   birthYear == 1956 || 
   birthYear == 1968 || 
   birthYear == 1980 ||
   birthYear == 1992 ||
   birthYear == 2004 ||
   birthYear == 2016 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/monkey.png";
}

if (
   birthYear == 1957 || 
   birthYear == 1969 || 
   birthYear == 1981 ||
   birthYear == 1993 ||
   birthYear == 2005 ||
   birthYear == 2017 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/rooster.png";
}

if (
   birthYear == 1958 || 
   birthYear == 1970 || 
   birthYear == 1982 ||
   birthYear == 1994 ||
   birthYear == 2006 ||
   birthYear == 2018 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/dog.jpeg";
}

if (
   birthYear == 1959 || 
   birthYear == 1971 || 
   birthYear == 1983 ||
   birthYear == 1995 ||
   birthYear == 2007 ||
   birthYear == 2019 
      ) {
let zodiac = document.getElementById("zodiac").src = "Images/zodiac/pig.jpeg";
}