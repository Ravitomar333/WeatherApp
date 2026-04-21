import React from 'react'
import Card from '@mui/material/Card';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import Typography from '@mui/material/Typography';

function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1621931645951-91d28f7e7fe4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGR1c3R5d2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
   const HOT_URL="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
   const COLD_URL="https://images.unsplash.com/photo-1674407866481-a39b2239f771?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL ="https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
        <div className="InfoBox">
       
        
      <div className="cardContainer">
          {/* <Card sx={{ maxWidth: 345 }}> */}
          <Card sx={{ width: "30%", margin: "20px auto" }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity > 80 ? RAIN_URL :info.temp > 15 ? HOT_URL: COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         {info.city}
         {info.humidity > 80 
  ? <ThunderstormIcon /> 
  : info.temp > 15 
  ? <SunnyIcon /> 
  : <AcUnitIcon />
}
        </Typography>
        <Typography variant="body2" component="span" sx={{ color: 'text.secondary' }}>
        <p>Temperature - {info.temp} &deg;C</p>
          <p>Humidity - {info.temp}</p>
           <p>Min Temp - {info.tempMin}&deg;C</p>
            <p>Max Temp - {info.tempMax}&deg;C</p>
             <p>FeelsLike - {info.feelsLike}&deg;C</p>
             <p>weather - {info.weather}</p>
        </Typography>
      </CardContent>
      
    </Card>
    </div>
     </div>
  )
};

export default InfoBox