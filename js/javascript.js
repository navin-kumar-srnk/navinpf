
window.addEventListener("load", ()=>{
   
   if(navigator.geolocation)
   {
       navigator.geolocation.getCurrentPosition(pos=>{
        navigator.geolocation.getCurrentPosition(position=>{
            lat=position.coords.latitude;
            lon=position.coords.longitude;
            const url='https://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=c4fca9daeed78b9f45e1f6cfeb035582&units=metric';
            fetch(url).then(data=>{
                return data.json().then(d=>{
                    console.log(d);
                    document.getElementById('name').innerText=d.name;
                    document.getElementById('temp').innerText=d.main.temp+"";
                    document.getElementById('weather').innerText=d.weather[0].main+"";
                })
            })
        })
           
       })
   }
               
});


