import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [time, setTime] = useState('');

  useEffect(() => {
    const timeFunc = setInterval(() => {
      const currTime = new Date();
      const hrs = currTime.getHours();
      const mins = currTime.getMinutes();
      const secs = currTime.getSeconds();
      const ampm = hrs >= 12 ? 'PM' : 'AM';
      
      setTime(`${formatNumber(hrs)}:${formatNumber(mins)}:${formatNumber(secs)} ${ampm}`);
    }, 1000);

    return () => clearInterval(timeFunc);
  }, []);

  function formatNumber(number) {
    return number < 10 ? `0${number}` : `${number}`;
  }

  return (
    <>
      <h1 className='animated-h1'>{time}</h1>
    </>
  );
}

export default App;
  