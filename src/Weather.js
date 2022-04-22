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
    <button className="bg-success ms-2">Current</button>
    </form>
    
    

    if (load){
    
        return (
            <div className="row" >
                {form}
         <div className="col-6">
         <ul className="list-unstyled pt-5">
       < li className="fs-1 ">
        {temp.name}
        <h3>
            Friday 12:44
        </h3>
        </li>
        <li className="fs-3"> <img src={temp.icon} alt="Weather Icon"/> {temp.temperature}°C</li>
        </ul>
        </div>
        <div className="col-6">
        <ul className="list-unstyled pt-5" >
        <li className="fs-3 pt-5">humidity:{temp.humidity}%</li>
        <li className="fs-3">wind:{temp.wind}km/hr</li>
        </ul>
        </div>
        <div className="row">

       <div className="col-2">
           <h4>Mon</h4>
           
           <h4>13°C</h4>
           </div>
           <div className="col-2">
           <h4>Tue</h4>
           
           <h4>13°C</h4>
           </div>
           <div className="col-2">
           <h4>Wed</h4>
           
           <h4>13°C</h4>
           </div>
           <div className="col-2">
           <h4>Thur</h4>
           
           <h4>13°C</h4>
           </div>
           <div className="col-2">
           <h4>Sat</h4>
           
           <h4>13°C</h4>
           </div>
           <div className="col-2">
           <h4>Sun</h4>
           
           <h4>13°C</h4>
           </div>
       </div>
         </div>

        
        
        )
    }else{
        return(
             form
            );
    }

    
}