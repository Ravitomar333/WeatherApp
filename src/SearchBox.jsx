import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import "./Searchbox.css"

function SearchBox({updateInfo}) {
    let[city, setCity] = useState("");
    let[err, seterr]=useState(false)

   const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = import.meta.env.VITE_API_KEY;
     
     let getWeatherInfo = async()=>{
      try{
             let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
      
       let result = {
        city: city,
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like, 
        weather: jsonResponse.weather[0].description,
       };
     
       return result;
      }catch(err){
        throw(err)
      }
      
     };



let handleChange = (event)=>{
    setCity(event.target.value);
}

let handleSubmit = async(event) =>{
  try{
event.preventDefault();
     let newinfo = await getWeatherInfo();
   updateInfo(newinfo);
    setCity("");
  }catch{
    seterr(true)
  }
    
}

  return (
    <div className='searchbox'>
    <form onSubmit={handleSubmit}>
         <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={handleChange} sx={{
    backgroundColor: "white",
    borderRadius: "5px"
  }}/><br></br><br></br>
          <Button variant="contained" endIcon={<SendIcon />} type='submit' >
        Search
      </Button>
      {err && <p  style={{color:"red"}}>NO such place exist</p>}
    </form>
    </div>
  )
}

export default SearchBox