import React, { useState } from 'react';

import WeatherGraph from './WeatherGraph';

const timestamp = Date.now()
const oneDay = 86400000;

const weatherMalmo = [{
    "data": {
        "timestamp": timestamp,
        "coord": {
            "lon": 13.0007,
            "lat": 55.6059
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 4.11,
            "feels_like": 0.86,
            "temp_min": 2.78,
            "temp_max": 6.11,
            "pressure": 1018,
            "humidity": 81
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.06,
            "deg": 280
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616399518,
        "sys": {
            "type": 1,
            "id": 1575,
            "country": "SE",
            "sunrise": 1616389492,
            "sunset": 1616433886
        },
        "timezone": 3600,
        "id": 2692969,
        "name": "Malmo",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + oneDay,
        "coord": {
            "lon": 13.0007,
            "lat": 55.6059
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 5.51,
            "feels_like": 0.86,
            "temp_min": 2.78,
            "temp_max": 6.11,
            "pressure": 1018,
            "humidity": 81
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.06,
            "deg": 280
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616399518,
        "sys": {
            "type": 1,
            "id": 1575,
            "country": "SE",
            "sunrise": 1616389492,
            "sunset": 1616433886
        },
        "timezone": 3600,
        "id": 2692969,
        "name": "Malmo",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 2),
        "coord": {
            "lon": 13.0007,
            "lat": 55.6059
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 6.88,
            "feels_like": 0.86,
            "temp_min": 2.78,
            "temp_max": 6.11,
            "pressure": 1018,
            "humidity": 81
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.06,
            "deg": 280
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616399518,
        "sys": {
            "type": 1,
            "id": 1575,
            "country": "SE",
            "sunrise": 1616389492,
            "sunset": 1616433886
        },
        "timezone": 3600,
        "id": 2692969,
        "name": "Malmo",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 3),
        "coord": {
            "lon": 13.0007,
            "lat": 55.6059
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 3.11,
            "feels_like": 0.86,
            "temp_min": 2.78,
            "temp_max": 6.11,
            "pressure": 1018,
            "humidity": 81
        },
        "visibility": 10000,
        "wind": {
            "speed": 2.06,
            "deg": 280
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616399518,
        "sys": {
            "type": 1,
            "id": 1575,
            "country": "SE",
            "sunrise": 1616389492,
            "sunset": 1616433886
        },
        "timezone": 3600,
        "id": 2692969,
        "name": "Malmo",
        "cod": 200
    }
}];

const weatherUppsala = [{
    "data": {
        "timestamp": timestamp,
        "coord": {
            "lon": 17.75,
            "lat": 60
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 2.83,
            "feels_like": -3.04,
            "temp_min": 2,
            "temp_max": 3.33,
            "pressure": 1009,
            "humidity": 70
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.14,
            "deg": 290
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616398622,
        "sys": {
            "type": 1,
            "id": 1731,
            "country": "SE",
            "sunrise": 1616388263,
            "sunset": 1616432836
        },
        "timezone": 3600,
        "id": 2666218,
        "name": "Uppsala County",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + oneDay,
        "coord": {
            "lon": 17.75,
            "lat": 60
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 3.83,
            "feels_like": -3.04,
            "temp_min": 2,
            "temp_max": 3.33,
            "pressure": 1009,
            "humidity": 70
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.14,
            "deg": 290
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616398622,
        "sys": {
            "type": 1,
            "id": 1731,
            "country": "SE",
            "sunrise": 1616388263,
            "sunset": 1616432836
        },
        "timezone": 3600,
        "id": 2666218,
        "name": "Uppsala County",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 2),
        "coord": {
            "lon": 17.75,
            "lat": 60
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 7.83,
            "feels_like": -3.04,
            "temp_min": 2,
            "temp_max": 3.33,
            "pressure": 1009,
            "humidity": 70
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.14,
            "deg": 290
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616398622,
        "sys": {
            "type": 1,
            "id": 1731,
            "country": "SE",
            "sunrise": 1616388263,
            "sunset": 1616432836
        },
        "timezone": 3600,
        "id": 2666218,
        "name": "Uppsala County",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 3),
        "coord": {
            "lon": 17.75,
            "lat": 60
        },
        "weather": [
            {
                "id": 801,
                "main": "Clouds",
                "description": "few clouds",
                "icon": "02d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 9.83,
            "feels_like": -3.04,
            "temp_min": 2,
            "temp_max": 3.33,
            "pressure": 1009,
            "humidity": 70
        },
        "visibility": 10000,
        "wind": {
            "speed": 5.14,
            "deg": 290
        },
        "clouds": {
            "all": 20
        },
        "dt": 1616398622,
        "sys": {
            "type": 1,
            "id": 1731,
            "country": "SE",
            "sunrise": 1616388263,
            "sunset": 1616432836
        },
        "timezone": 3600,
        "id": 2666218,
        "name": "Uppsala County",
        "cod": 200
    }
}];

const weatherGoteborg = [{
    "data": {
        "timestamp": timestamp,
        "coord": {
            "lon": 11.9668,
            "lat": 57.7072
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 4.5,
            "feels_like": 0.2,
            "temp_min": 2,
            "temp_max": 6.67,
            "pressure": 1015,
            "humidity": 80
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1616400053,
        "sys": {
            "type": 1,
            "id": 1746,
            "country": "SE",
            "sunrise": 1616389699,
            "sunset": 1616434175
        },
        "timezone": 3600,
        "id": 2711537,
        "name": "Gothenburg",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + oneDay,
        "coord": {
            "lon": 11.9668,
            "lat": 57.7072
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 6.5,
            "feels_like": 0.2,
            "temp_min": 2,
            "temp_max": 6.67,
            "pressure": 1015,
            "humidity": 80
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1616400053,
        "sys": {
            "type": 1,
            "id": 1746,
            "country": "SE",
            "sunrise": 1616389699,
            "sunset": 1616434175
        },
        "timezone": 3600,
        "id": 2711537,
        "name": "Gothenburg",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 2),
        "coord": {
            "lon": 11.9668,
            "lat": 57.7072
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 3.5,
            "feels_like": 0.2,
            "temp_min": 2,
            "temp_max": 6.67,
            "pressure": 1015,
            "humidity": 80
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1616400053,
        "sys": {
            "type": 1,
            "id": 1746,
            "country": "SE",
            "sunrise": 1616389699,
            "sunset": 1616434175
        },
        "timezone": 3600,
        "id": 2711537,
        "name": "Gothenburg",
        "cod": 200
    }
}, {
    "data": {
        "timestamp": timestamp + (oneDay * 3),
        "coord": {
            "lon": 11.9668,
            "lat": 57.7072
        },
        "weather": [
            {
                "id": 800,
                "main": "Clear",
                "description": "clear sky",
                "icon": "01d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": -2.5,
            "feels_like": 0.2,
            "temp_min": 2,
            "temp_max": 6.67,
            "pressure": 1015,
            "humidity": 80
        },
        "visibility": 10000,
        "wind": {
            "speed": 3.6,
            "deg": 220
        },
        "clouds": {
            "all": 0
        },
        "dt": 1616400053,
        "sys": {
            "type": 1,
            "id": 1746,
            "country": "SE",
            "sunrise": 1616389699,
            "sunset": 1616434175
        },
        "timezone": 3600,
        "id": 2711537,
        "name": "Gothenburg",
        "cod": 200
    }
}];

//console.log(weatherUppsala);
//console.log(weatherMalmo);
//console.log(weatherGoteborg);

/*
[{
    {
        name: 'Malmo'
        temp: 4.11,
        timestamp: 59435984,
        wind: {speed: 2.06, deg: 280}
    },
    {
        name: 'Uppsala County'
        temp: 2.83,
        timestamp: 59435984,
        wind: {speed: 3.06, deg: 180}
    },
    {
        name: 'Gothenburg'
        temp: 4.5,
        timestamp: 59435984,
        wind: {speed: 3.6, deg: 220}
    }
}]
*/

const weatherArr = [...weatherUppsala, ...weatherMalmo, ...weatherGoteborg]

let anewResult = [];
//let tempObj = {};

for (let i = 0; i < weatherArr.length; i++) {
    // "öva på nested destructuring"
    let name = weatherArr[i].data.name;
    let temp = weatherArr[i].data.main.temp;
    let wind = weatherArr[i].data.wind;
    let timestamp = weatherArr[i].data.timestamp;

    anewResult.push({ name: name, temp: temp, wind: wind, timestamp: timestamp });
}

//let newResult = weatherArr.map(({ data: { name, wind, main: { temp } } }) => ({ [name]: { temp, wind } }))
let newResult = weatherArr.map(({ data: { timestamp, name, wind, main: { temp } } }, index) => ({ timestamp, name, temp, wind, index }))

console.log(newResult)
/*
const CachedData = () => (
    <>
    <h1>Cached Data</h1>
    <ul>
    {newResult.map((item, index) => <li key={index}>{item.name} has {item.temp.toFixed(1)} degrees right now. {(item.wind.speed > 3) && `It's windy`} </li>)}
    </ul>
    </>
);
*/
const CachedData = () => {
    const [result, setResult] = useState(newResult)

    const handleChange = (name) => {
        console.log(name);
        // filtrera bort det elementet vars name-key överrenstämmer med det name vi får in
        let filteredResult = result.filter(item => !(item.name === name));
        setResult(filteredResult)
    }

    const resetHidden = () => setResult(newResult);

    // Vid klick på HIDE skall handleChange i CachedData's scope köras.
    // överkurs: jag vill att motsvarande name som hör till raden där knappen sitter skrivs ut

    return (
        <>
            <h1>Cached Data</h1>
            <WeatherGraph />
            <WeatherList data={result} handleChange={handleChange} />
            <button onClick={resetHidden}>RESET</button>

        </>
    )
}

const WeatherList = ({ data, handleChange }) => (
    <ul>
        {data.map(item => (<WeatherItem handleChange={handleChange} key={item.index} item={item} />))}
    </ul>
);

const WeatherItem = ({ item, handleChange }) => (
    <li>{item.name} has {item.temp.toFixed(1)} degrees right now. {(item.wind.speed > 3) && `It's windy`}
        <button onClick={(event) => handleChange(item.name)}>HIDE</button>
    </li>
)

export default CachedData;
