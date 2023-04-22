import './App.css';
import React, { useEffect, useState } from "react";
import Weather from './components/weather';
import axios from "axios";
import logo from './assets/city-rain.gif';
import styled from 'styled-components'

const Container = styled.div`
  background-image: url(${logo});

  /* Full height */
  height: 100%;

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;


export default function App() {
  
  const [lat, setLat] = useState([]);
  const [long, setLong] = useState([]);
  const [data, setData] = useState({
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  });

  // useEffect(() => {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //     setLat(position.coords.latitude);
  //     setLong(position.coords.longitude);
  //   });
  // }, []);
    
  // useEffect(() => {
  //   if (lat != "" && long != "") {

  //     const fetchData = async () => {

  //       axios
  //         .get(`${process.env.REACT_APP_API_URL}/weather?lat=${lat}&lon=${long}&APPID=${process.env.REACT_APP_API_KEY}`)
  //         .then(result => {
  //           setData(result)
  //           console.log(result);
  //         })
  //         .catch(response => {
  //           console.log(`Error: ${response}`)
  //         });
  //     }
  //     fetchData();
  //   }
  // }, [lat,long])

  return (
    <Container className="App">
      <div
        style={{
          margin: '0rem 38rem',
          paddingTop: '21rem'
        }}
      >
        {data.main ? (<Weather weatherData={data}/>) : (<div></div>)}
      </div>
    </Container>
  );
}