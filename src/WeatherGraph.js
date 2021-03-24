import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels: ["24/03/2021", "25/03/2021", "26/03/2021", "27/03/2021"],
    datasets: [
        {
            label: 'Uppsala County',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [4.11, 5.51, 6.88, 3.11]
        },
        {
            label: 'Gothenburg',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(20,92,192,0.4)',
            borderColor: 'rgba(20,92,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(20,92,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(20,92,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [8.5, 5.9, 8.0, 5.1]
        },
    ]
};

const WeatherGraph = (props) => {
    const displayName = 'LineExample'

    return (
        <div>
            <h2>Line Example</h2>
            <Line data={data} />
        </div>
    );
}


export default WeatherGraph;
