import { useEffect, useState } from 'react';

type Weather = {
    current_weather: {
        temperature: string
        is_day: boolean
    }
}

function Weather() {
    const [temperature, setTemperature] = useState('—');

    const fetchWeather = () => {
        const options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        };

        async function success(pos: GeolocationPosition) {
            const crd = pos.coords;
            await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${crd.latitude}&longitude=${crd.longitude}&current_weather=true`)
                .then(response => response.json())
                .then((data: Weather) => {
                    setTemperature(data.current_weather.temperature);
                    //setIsDay(data.current_weather.is_day);
                });
        }

        function error(err: GeolocationPositionError) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        navigator.geolocation.getCurrentPosition(success, error, options);
    };

    useEffect(() => {
        void fetchWeather();
    });

    return (
        <>
            {temperature} °C
        </>
    );
}

export default Weather;