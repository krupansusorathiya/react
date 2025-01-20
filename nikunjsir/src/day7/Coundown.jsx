import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(300); 

  useEffect(() => {
    if (time === 0) return;

    const Time = setInterval(() => {
      setTime(t => t - 1);
    }, 1000);

    return () => clearInterval(Time);
  }, [time]);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return (
    <div>
      <h1>Countdown Timer</h1>
      <div>{`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}</div>
    </div>
  );
};

export default CountdownTimer;
