URL = "https://api.open-meteo.com/v1/forecast?latitude=28.61&longitude=77.20&current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl&daily=sunrise,sunset&timezone=auto";

  
window.onload = function(){

   if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(
         function(position){
             const latitude = position.coords.latitude;
             const longitude = position.coords.longitude;

             getWeather(latitude,longitude);



         },
         function(){
            alert("Location Permission denied");
         }

      );
     
   }else{
      alert("geolocation is not supported");
   }
}






async function SearchCity() {
   const city = document.querySelector("#city").value;
console.log(city);


   const GeoResponse = await fetch( `https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1`);

   const GeoData = await GeoResponse.json();
    
   

   const latitude = GeoData.results[0].latitude ;
   const longitude = GeoData.results[0].longitude;
 
 getWeather(latitude,longitude);

}






async function getWeather(latitude,longitude) {



 
  const weatherResponse = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,pressure_msl,cloud_cover&daily=sunrise,sunset&forecast_days=3&timezone=auto`);
   
  const FinalDetails = await weatherResponse.json();

  console.log(FinalDetails);
  console.log(FinalDetails.daily.sunrise[0]);
  console.log(FinalDetails.current.cloud_cover);


  document.querySelector("#a").innerHTML = FinalDetails.current.temperature_2m;
 let cloud = document.querySelector("#cloud").innerHTML = FinalDetails.current.cloud_cover;
 
 document.querySelector("#wind").innerHTML = FinalDetails.current.wind_speed_10m;
 document.querySelector("#pressure").innerHTML = FinalDetails.current.pressure_msl;
 document.querySelector("#sunrise").innerHTML = FinalDetails.daily.sunrise[0].split("T")[1];
 document.querySelector("#sunset").innerHTML = FinalDetails.daily.sunset[0].split("T")[1];
 document.querySelector("#Humidity").innerHTML = FinalDetails.current.relative_humidity_2m;

 if(cloud >80 && cloud< 100){
  document.querySelector("#feel").innerHTML = "Most Cloudy";
 }else if(cloud > 60 && cloud < 80){
  document.querySelector("#feel").innerHTML = "Middle-level cloud";
 }else 
 {
  document.querySelector("#feel").innerHTML = "Low-level cloud";
 }
  

 
 
   
}

