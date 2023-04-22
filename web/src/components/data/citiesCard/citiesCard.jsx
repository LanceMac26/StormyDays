import styled from "styled-components";
import { Card } from "antd";
import { Bar } from '@ant-design/plots';

const CitiesCard = styled(Card)`

`;

const TempGraph = styled(Bar)`
    height: 3rem !important;
`;

const Temperature = styled.div``;

const CityName = styled.div``;

export { CitiesCard, TempGraph, Temperature, CityName };