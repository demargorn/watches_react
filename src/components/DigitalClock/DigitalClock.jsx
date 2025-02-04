import { useState, useEffect } from 'react';
import './DigitalClock.css';

const DigitalClock = ({ name, timeZone, onDelete }) => {
   const [time, setTime] = useState(new Date());

   // применяем смещение временной зоны
   const localTime = new Date(time.getTime() + (timeZone - 3) * 3600 * 1000);

   useEffect(() => {
      const intervalId = setInterval(() => {
         setTime(new Date());
      }, 1000);
      return () => clearInterval(intervalId); // очистка интервала
   }, []);

   return (
      <div className='card'>
         <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <p className='card-text'>{localTime.toLocaleTimeString()}</p>
            <button className='btn btn-primary btn-close' onClick={onDelete} />
         </div>
      </div>
   );
};

export default DigitalClock;
