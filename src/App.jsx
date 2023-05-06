import {useState} from 'react';
import axios from "axios";


export default function App(){
  const [data, setData] = useState({})
  const [location, setLocation] = useState("")

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&lang=ru&appid=467d4e8aca57f1378f6cdafe480ee64a`

  const searchLocation = (event) => {
    if (event.key === 'Enter'){
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation("")
      console.log(data)
    }
  }

  return(
    <div className="app">
      <h1>Погода в любом городе</h1>
      <div className="search">
        <input 
        value={location}
        onChange={(event)=> setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Введите название города или страны!"
        type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>{data.name}</p>
          </div>
          <div className="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null }
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].description}</p> : null}
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p className="bold"></p>
            <p>Как ощущается</p>
          </div>
          <div className="humidity">
            <p className="bold"></p>
            <p>Влажность</p>
          </div>
          <div className="wind">
            <p className="bold"></p>
            <p>Скорость ветра</p>
          </div>
        </div>
      </div>

    </div>
  )
}
