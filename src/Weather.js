import axios from "axios";
import React, {useState} from "react";
import "./Weather.css"
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Weather(){
       
    const[city, setCity]=useState("")
    const [load, setLoad]= useState(false)
    const [temp, setTemp] =useState(null)

       function showResponse(response){
        setLoad (true);
        setTemp ({
            temperature: Math.round(response.data.main.temp),
         humidity: Math.round(response.data.main.humidity),
         wind: Math.round(response.data.wind.speed),
         icon:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
         name: response.data.name
        });
        console.table(response.data)

           
       }

       function showWeather(event){
           setCity(event.target.value)
       }

    function handleSubmit(event){
        event.preventDefault()
        let apiUrl= `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=e22adb13ecfe9db5af2e8b64dfc0ed33&units=metric`
        axios.get(apiUrl).then(showResponse)
        
    }

    let form =  <form onSubmit={handleSubmit}>
    <input onChange={showWeather} type="search" placeholder="Type city"/>
    <input type="submit" value="search"/>
    <button className="bg-success">Current</button>
    </form>
    
    

    if (load){
    
        return (
            <div className="row" >
                {form}
         <div className="col-6">
         <ul>
       <li>
        {temp.humidity}
        </li>
        <li>{temp.temperature}</li>
        <li>{temp.wind}</li>
        </ul>
        </div>
        <div className="col-6">
        <ul>
        <li>
        <img src={temp.icon} alt="Weather Icon"/>
        </li>
        <li>{temp.name}</li>
        </ul>
        </div>
        </div>
        )
    }else{
        return(
             form
            );
    }

    
}