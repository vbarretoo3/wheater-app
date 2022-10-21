import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setdata] = useState({})
  const [location, setLocation] = useState('')
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=fa9f9171d06071bba477e12c7071ed03`

  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setdata(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }

  return (
    <div className="App">
      <div className="search">
        <input value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} placeholder="Enter location" type="text"/>
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className='temp'>
            {data.main ? <h1>{data.main.temp} °C</h1> :null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>
        {data.name ? 
        <div className="bottom">
          <div className="feels">
            {data.main ? <p className='bold'>{data.main.feels_like} °C</p> :null}
            <p>Feels Like</p>
          </div>
          <div className="humidty">
            {data.main ? <p className='bold'>{data.main.humidity} %</p> :null}
            <p>Humidty</p>
          </div>
          <div className="wind">
            {data.wind ? <p className='bold'>{data.wind.speed} KM/H</p> :null}
            <p>Wind Speed</p>
          </div>
        </div>
        : null}
      </div>
    </div>
  );
}

export default App;
