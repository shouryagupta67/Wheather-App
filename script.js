let apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
let apiKey="de5cf0c0bd78729770fcccca3a61c0b6";
const searchBox=document.querySelector('.search input');
const weatherIcon=document.querySelector('.weather .weather-icon');
const searchBtn=document.querySelector('.search button');

async function checkWeather(city){
    const response=await fetch(apiUrl+city+`&appid=${apiKey}`);
    if(response.status==404){
        
        document.querySelector('.weather').style.display='none';
        document.querySelector('.error').style.display='block';
    }else{
        var data= await response.json();
   
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML= Math.round(data.main.temp) +"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+" Km/h";
        if(data.weather[0].main=="Clouds"){
         weatherIcon.src="images/clouds.png";
        } else if(data.weather[0].main=="Clear"){
          weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="images/rain.png";
          }else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="images/drizzle.png";
          }else if(data.weather[0].main=="Mist"){
            weatherIcon.src="images/mist.png";
          }else if(data.weather[0].main=="Snow"){
            weatherIcon.src="images/snow.png";
          }
          document.querySelector('.error').style.display='none';

          let weatherBox=document.querySelector('.weather').style.display='block';
    }       
    
    
}
searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
 
})
