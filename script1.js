const apikey = "216aecd455f84bd2a9583e5dea8f1e74";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

// Input tag
const serachBox = document.querySelector(".search input");

// Button
const serachButton = document.querySelector(".search button");


async function checkWeather(city){
    const response = await fetch(apiUrl+ city + `&appid=${apikey}`);  // fetch ke bad tum apna url dal skte ho
    var data = await response.json();

    // Get data from api
    console.log(data)

    
}

// on click method 
serachButton.addEventListener("click", ()=>{
    checkWeather(serachBox.value);

})