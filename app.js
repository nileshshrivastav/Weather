let loc = document.getElementById('location');
let tempvalue = document.getElementById('temp-value');
let climate = document.getElementById('climate');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');


searchButton.addEventListener('click',(e)=>{

    e.preventDefault();
    getWeather(searchInput.value);
    searchInput.value = '';


});


const getWeather=async (city) =>
{


    try{

        const Response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=49a5f446a382189f8bd19eca98091858`,

        {mode:'cors'}
        );
       
        const weatherData = await Response.json();
        console.log(weatherData);
        const{name}=weatherData;
        const{feels_like}=weatherData.main;
        const{id,main}= weatherData.weather[0];
        loc.textContent=name;
        climate.textContent= main;
        tempvalue.textContent=Math.round(feels_like-273);


    }

    catch(error)
    {
        alert('wrong city name! ')
    }
}



