
window.addEventListener("load", ()=>{
   /*weather api*/
   if(navigator.geolocation)
   {
       navigator.geolocation.getCurrentPosition(pos=>{
        navigator.geolocation.getCurrentPosition(position=>{
            lat=position.coords.latitude;
            lon=position.coords.longitude;
            const url='https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c4fca9daeed78b9f45e1f6cfeb035582&units=metric';
            fetch(url).then(data=>{
                return data.json().then(d=>{
                    console.log(d);
                    document.getElementById('name').innerText=d.name;
                    document.getElementById('temp').innerText=d.main.temp+"";
                    document.getElementById('weather').innerText=d.weather[0].description+"";
                   
                    if(d.weather[0].description=="Rain")
                    {
                       
                        document.getElementById("rain").classList.add("rain");
                        document.getElementById("weatherdiv").classList.add("rainy");
                    }
                    else if(d.weather[0].main=="Clouds")
                    {
                        document.getElementById("weatherdiv").classList.add("rainy");
                   
                    }
                 
                    else if(d.weather[0].main=="Clear")
                    {
                        document.getElementById("weatherdiv").classList.add("sunny");
                    }
                    else
                    {
                        document.getElementById("weatherdiv").classList.add("sunny");

                    }
                })
            })
        })
           
       })
   }

   /* daya and night background*/

   var hr = (new Date()).getHours(); 
   if(hr>4 && hr<18)
   {
       document.getElementById("b").classList.add("day");
   }
   else 
   {
       document.getElementById("b").classList.add("night");
   }


               
});


