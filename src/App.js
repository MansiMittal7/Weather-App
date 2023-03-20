import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import  axios  from 'axios';
import {  useState } from "react";

function App() {

  const apiKey = "5b77e4366c6e42a3cdbfcf7437f056b1"
  const [inputCity,setInputCity] = useState("")
  const [data,setData] = useState({})

  const getWetherDetails = (cityName) => {
    if (!cityName) return 
    const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(apiURL).then((res) =>{
     console.log("response",res.data)
     setData(res.data)
    
     
    }).catch((err)=>{
    console.log("err", err)
    })
  }
  
  const handleChangeInput = (e) => {
    console.log("value", e.target.value)
    setInputCity(e.target.value)
  }
  const handleSearch = () => {
    getWetherDetails(inputCity)
  }

  

  return ( 
    <>
    <div className="col-md-12">
    <div className="background">
     <h1 className="heading">Weather App</h1>
     <div className="d-grid gap-3 col-4 mt-4">
     <input type="text" className="form-control"
     value={inputCity}
      onChange={handleChangeInput} />
     <button className="search-btn" type="button"
     onClick={handleSearch}
     >Search</button>
     </div>
    </div> 
    {
      Object.keys(data).length> 0 &&  
     
    
    <div className="col-md-12 text-center mt-5">
    <div className="shadow rounded weatherResultBox ">
    <img className="weatherIcon"
    src="https://www.creativefabrica.com/wp-content/uploads/2021/03/31/weather-icon-illustration03-Graphics-10205167-1-1-580x375.jpg"/>
    <h5 className="weatherCity">
      {data?.name}
    </h5>
    <h6 className="weatherTemp">{((data?.main?.temp)-273.15).toFixed(2) }°C</h6>
    </div>
    </div>
}
    </div>
    </>
  );
}

export default App;
 