import React, { useEffect, useState } from 'react';

//const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

const url = "http://api.openweathermap.org/data/2.5/weather?q=uppsala,se&APPID=776b061b368518aa6aca66c7b0c8eab6&units=metric"


function WeatherHook() {
    const [data, setData] = useState({ data: null });
    console.log(data);

    useEffect(() => {
        console.log("Hej från useEffect");
        fetch(url)
            .then(response => response.json())
            .then(json => setData({ data: json }));
    }, []);

    return (
        <span>Weather! {!data.data ? '?' : data.data.main.feels_like.toFixed(1)} </span>
    )
}

export default WeatherHook;