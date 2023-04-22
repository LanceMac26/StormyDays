import React from 'react';
import { Card } from 'semantic-ui-react';
import moment from 'moment';
import StyledCitiesCard from './data/citiesCard';

const Weather = ({weatherData}) => {
  const { name, main, weather, sys } = weatherData;
  
  return (
    <>
      <Card>
        <Card.Content>
            <Card.Header className="header">City Name: {name}</Card.Header>
            <p>Temprature: {main.temp} &deg;C</p>
            <p>Sunrise: {new Date(sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Sunset: {new Date(sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
            <p>Description: {weather[0].main}</p>
            <p>Humidity: {main.humidity} %</p>
            <p>Day: {moment().format('dddd')}</p>
            <p>Date: {moment().format('LL')}</p>
        </Card.Content>
      </Card>
      <StyledCitiesCard />
    </>
  )
}
  
export default Weather;