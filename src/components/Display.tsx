import { useEffect, useState } from 'react';
import Weather from './Weather';
import moment from 'moment';

function Display() {
    const [dateAndTime, setDateAndTime] = useState({
        date: '1998-04-13',
        time: {
            hours: '00',
            minutes: '00'
        }
    });
    const [blinkingColon, setBlinkingColon] = useState(false);

    const update = () => {
        moment().locale();
        const currentDate = moment().format('YYYY-MM-DD');
        const hours = moment().format('HH');
        const minutes = moment().format('mm');

        const dateAndtime = {
            date: currentDate,
            time: {
                hours: hours,
                minutes: minutes
            }
        };
        
        setBlinkingColon((current) => !current);
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
                {dateAndTime.time.hours} <span style={{visibility: blinkingColon ? 'hidden' : 'visible'}}> : </span> {dateAndTime.time.minutes}
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