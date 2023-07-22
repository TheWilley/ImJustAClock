import { useEffect, useState } from 'react';
import Weather from './Weather';

function Display() {
    const [dateAndTime, setDateAndTime] = useState({
        date: '1998-04-13',
        time: '00:00'
    });

    const update = () => {
        const date = new Date().toJSON();
        console.log(date);
        const currentDate = date.slice(0, 10);
        const currentTime = date.slice(11, 16);

        const dateAndtime = {
            date: currentDate,
            time: currentTime
        };

        setDateAndTime({ ...dateAndtime });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            update();
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='grid grid-cols-1 sm:grid-cols-2'>
            <div className='text-8xl'>
                {dateAndTime.time}
            </div>
            <div className='text-3xl flex items-center justify-center'>
                <div>
                    <div>
                        {dateAndTime.date}
                    </div>
                    <div>
                        <Weather />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Display;