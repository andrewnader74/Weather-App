let days = [];
let weather =[];
let currentDay = [];
async function   getForecast() 
{
   let x = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=67a6d6a270ec48f0a2885720231402&q=EGYPT&days=3&aqi=yes&alerts=yes`);
   let finalresult = await x.json();

    days = finalresult.location;
    weather=finalresult.forecast;
    currentDay=finalresult.current;
    console.log(days);
    console.log(weather);

    display_weather();
}

getForecast();
    

function display_weather()
{
    var date = new Date(days.localtime);
     var date2 = new Date(weather.forecastday[1].date)
     var date3 = new Date(weather.forecastday[2].date)

    let cartoona =``

    
    cartoona=`

    <div class="container rounded-3">
            <div class="forecast-container row" id="forecast">
      
              <div class="today forecast  justify-content-center align-items-center col-lg-4">
              <div class="forecast-header py-2   row" id="today">
              <div class="day  col-4">${moment(date).format('dddd')}</div>
              <div class=" date offset-4  col-4">${moment(date).format('D MMMM')}</div>
              </div> 
              <div class="forecast-content" id="current">
              <div class="location fs-5 py-1">${days.name}</div>
              <div class="degree row" >
                  <div class="num col-4 fw-bold text-white">${currentDay.temp_c}<sup>o</sup>C</div>
                
                  <div class="forecast-icon offset-4 py-4 col-4">
                      <img src="https:${currentDay.condition.icon}" alt="" width="90">
                  </div>	
              
              </div>
              <div class="custom py-3">${currentDay.condition.text}</div>
              <span><i class="fa-solid fa-umbrella"></i>20%</span>
                          <span><i class="fa-solid fa-wind"></i>18km/h</span>
                          <span class=""><i class="fa-regular fa-compass"></i>East</span>
              </div>
              </div>
      
            <div class="forecast day2-content px-0   text-center justify-content-center align-items-center col-lg-4">
                  <div class="day2 forecast-header   py-2 ">
                      <div class="day">${moment(date2).format('dddd')}</div>
                  </div> 
                  <div class="forecast-content py-4">
                      <div class="forecast-icon py-3">
                          <img src="https:${weather.forecastday[1].day.condition.icon}" alt="" width="48">
                      </div>
                      <div class="degree fs-3 text-white">${weather.forecastday[1].day.maxtemp_c}<sup>o</sup>C</div>
                      <small class="fs-6"">${weather.forecastday[1].day.mintemp_c}<sup>o</sup></small>
                      <div class="custom py-3">${weather.forecastday[1].day.condition.text}</div>
                  </div>
                  </div>
      
              <div class="forecast px-0 text-center justify-content-center align-items-center col-lg-4">
                  <div class="forecast-header day3 py-2">
                      <div class="day">${moment(date3).format('dddd')}</div>
                  </div> 
                  <div class="forecast-content py-4">
                      <div class="forecast-icon py-3">
                          <img src="https:${weather.forecastday[2].day.condition.icon}" alt="" width="48">
                      </div>
                      <div class="degree fs-3 text-white">${weather.forecastday[2].day.maxtemp_c}<sup>o</sup>C</div>
                      <small class="fs-6">${weather.forecastday[2].day.mintemp_c}<sup>o</sup></small>
                      <div class="custom py-3">${weather.forecastday[2].day.condition.text}</div>
                  </div>
                  </div></div>
    
          </div>
          
    
     `



  document.getElementById('weather_forecast').innerHTML=cartoona

}

