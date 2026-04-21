import React ,{ useState } from 'react'
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import "./WeatherApp.css";

function WeatherApp() {

    const[weatherInfo, setWeatherInfo] = useState({
        city: "Demo",
        feelslike: 24.84,
        temp:25.05,
        tempMin: 25.05,
        tempMax: 25.05,
        humidity: 47,
        weather: "haze",
   
    });


     const getBackground = () => {
    if (!weatherInfo) return "default-bg";
    if (weatherInfo.humidity > 80) return "rainy-bg";
    if (weatherInfo.temp > 30) return "hot-bg";
    if (weatherInfo.temp < 10) return "cold-bg";
    return "default-bg";
  };

let updateInfo = (newinfo)=>{
  setWeatherInfo(newinfo)
}

  return (
    
   <div className="app cold-bg" style={{ textAlign: "center" }}>
        <h2 style={{color:'black'}}>WeatherApp</h2>
        <SearchBox  updateInfo={updateInfo}/>
        <InfoBox info ={weatherInfo}/>
        
        </div>
  )
}

export default WeatherApp