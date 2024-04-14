        const apikey = "216aecd455f84bd2a9583e5dea8f1e74";
        const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    
        const serachBox = document.querySelector(".search input");
        const serachButton = document.querySelector(".search button");
        const weatherIcon = document.querySelector(".weather-icon");

        async function checkWeather(city){
            const response = await fetch(apiUrl+ city + `&appid=${apikey}`);
            var data = await response.json();

            console.log(data)

            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
            document.querySelector(".wind").innerHTML = data.wind.speed +"km/hr";

            if(data.weather[0].main == "Clouds"){
                weatherIcon.src = "images/clouds.png"
            }
            else if(data.weather[0].main == "Clear"){
                weatherIcon.src = "images/clear.png"
            }
            else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "images/rain.png"
            }
            else if(data.weather[0].main == "Mist"){
                weatherIcon.src = "images/Mist.png"
            }
            else if(data.weather[0].main == "Drizzle"){
                weatherIcon.src = "images/drizzle.png"
            }
        }

        serachButton.addEventListener("click", ()=>{
            checkWeather(serachBox.value);
           
        })
        

        