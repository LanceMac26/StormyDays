import React from "react";
import { 
    CitiesCard,
    Temperature,
    CityName,
    TempGraph,
} from './citiesCard';

const StyledCitiesCard = (props) => {

    const data = [
        {
          type: '分类七',
          values: [-80, 8],
        },
        {
          type: '',
          values: [-80, 34],
        },
    ];

    const config = {
        data: data.reverse(),
        xField: 'values',
        yField: 'type',
        isRange: true,
        label: {
          position: 'middle',
          layout: [
            {
              type: 'adjust-color',
            },
          ],
        },
    };

    return (
        <CitiesCard>
            <Temperature>{props.temperature}</Temperature>
            <CityName>{props.cityName}</CityName>
            {/* <TempGraph high={props.high} low={props.low} /> */}
            <TempGraph  {...config} />
        </CitiesCard>
    );
}

export default StyledCitiesCard;