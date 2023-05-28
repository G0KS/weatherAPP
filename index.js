const weather = async () => {
   let city = inpData.value;
   inpData.value = "";
   if (city) {
      const weatherData = await fetch(
         `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`
      );
      weatherData.json().then((data) => {
         console.log(data);
         if (data.cod > 400) {
            alert(
               "The city name does not match our database.. Please recheck the city name you entered"
            );
         } else {
            let temp = data.main.temp;
            let feelTemp = data.main.feels_like;
            let city = data.name;
            let country = data.sys.country;
            let climate = data.weather[0].main;
            let climateDesc = data.weather[0].description;
            let wind = data.wind.speed;
            let humidity = data.main.humidity;
            let pressure = data.main.pressure;
            let climateID = data.weather[0].id;
            console.log(climateID);

            if (climateID < 300) {
               icon = `<i class="fa-solid fa-cloud-bolt"></i>`;
            } else if (climateID < 400) {
               icon = `<i class="fa-solid fa-cloud-rain"></i>`;
            } else if (climateID < 600) {
               icon = `<i class="fa-solid fa-cloud-showers-heavy"></i>`;
            } else if (climateID < 700) {
               icon = `<i class="fa-solid fa-snowflake"></i>`;
            } else if (climateID < 800) {
               icon = `<i class="fa-solid fa-smog"></i>`;
            } else if (climateID === 800) {
               icon = `<i class="fa-solid fa-sun"></i>`;
            } else if (climateID < 900) {
               icon = `<i class="fa-solid fa-cloud"></i>`;
            }

            weatherDisplay.innerHTML = `
            <div class="weatherImg">
            ${icon}
            <h3 class="details">${temp}°C</h3>
            <marquee direction="left" width="35%" 
            >Feels like:<span class="details"> ${feelTemp}°C</span></marquee
            >
            </div>
            <h2>${city} | ${country}</h2>
            <div class="row">
            <div class="col">
            <h3>${climate}</h3>
            <p class="details">${climateDesc}</p>
            </div>
            <div class="col">
            <h3>Wind Speed</h3>
            <p class="details">${wind}kmph</p>
            </div>
            </div>
            <div class="row">
            <div class="col">
            <h3>Humidity</h3>
            <p class="details">${humidity}%</p>
            </div>
            <div class="col">
            <h3>Pressure</h3>
            <p class="details">${pressure}</p>
            </div>
            </div>
            `;
         }
      });
   } else {
      alert("Please enter an input");
   }
};
