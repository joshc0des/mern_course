import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = (props) => {
  const { country } = props
  const [weather, setWeather] = useState({})
  const lat = country.capitalInfo.latlng[0]
  const lon = country.capitalInfo.latlng[1]
  const api_key = process.env.REACT_APP_API_KEY
  const url = 
  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`

  useEffect(() => {
    console.log('effect')
    axios
      .get(`${url}`)
      .then(response => {
        console.log('promise fulfilled')
        setWeather(response.data)
      })
  }, [api_key, lat, lon, url])

const checkIcon = () => {
  if (Object.keys(weather).length > 0) {
    return (
      <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="" />
    )
  } else {
    return (
      <div></div>
    )
  }
}

  return (
    <div>
      <br />
      <h2>Weather in {`${country.name.common}`}</h2>
      <br />
      temperature {`${weather.main?.temp}`} Celsius
      <br />
      {checkIcon()}
      <br />
      wind {`${weather.wind?.speed}`} m/s
    </div>
  )
}

export default Weather