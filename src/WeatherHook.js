import React, { useEffect, useState } from 'react';

//const url = "http://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f8384513fad5f91ea04d07a2cbf916ec&units=metric";

const url = "http://api.openweathermap.org/data/2.5/weather?q=gothenburg,se&APPID=776b061b368518aa6aca66c7b0c8eab6&units=metric"

// delmål för förmiddagen:
// 1.   skapa en array med väderdata från 3 olika platser i sverige
// 1b  öva på nested destructuring
// 2.   öva på att bestämma datastrukturen
// 3.   öva på att rendera datastrukturen
// 4.   öva på att filtrera datan i samband med renders


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