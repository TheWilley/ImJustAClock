import { useEffect, useState } from 'react';
import Weather from './Weather';
import moment from 'moment';

function Display() {
    const [dateAndTime, setDateAndTime] = useState({
        date: '1998-04-13',
        time: '00:00'
    });

    const update = () => {
        moment().locale();
        const currentDate = moment().format('YYYY-MM-DD');
        const currentTime = moment().format('HH:mm');

        const dateAndtime = {
            date: currentDate,
            time: currentTime
        };

        setDateAndTime({ ...dateAndtime });
    };

    useEffect(() => {
        update();
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
            <div className='text-3xl flex items-center justify-center p-3'>
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