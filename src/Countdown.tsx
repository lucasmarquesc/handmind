import React, { useState, useEffect } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown: React.FC = () => {
 
  const targetDate = new Date('2025-12-01T09:00:00');

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +targetDate - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }); 

  const formatTimeUnit = (unit: number): string => {
    return String(unit).padStart(2, '0');
  };

  return (
    <div className="p-4 bg-light rounded border shadow-sm">
      {timeLeft.days + timeLeft.hours + timeLeft.minutes + timeLeft.seconds > 0 ? (
        <div className="d-flex justify-content-center text-center">
          <div className="mx-2">
            <h2 className="display-4">{formatTimeUnit(timeLeft.days)}</h2>
            <p className="text-muted mb-0">Dias</p>
          </div>
          <h2 className="display-4">:</h2>
          <div className="mx-2">
            <h2 className="display-4">{formatTimeUnit(timeLeft.hours)}</h2>
            <p className="text-muted mb-0">Horas</p>
          </div>
          <h2 className="display-4">:</h2>
          <div className="mx-2">
            <h2 className="display-4">{formatTimeUnit(timeLeft.minutes)}</h2>
            <p className="text-muted mb-0">Minutos</p>
          </div>
          <h2 className="display-4">:</h2>
          <div className="mx-2">
            <h2 className="display-4">{formatTimeUnit(timeLeft.seconds)}</h2>
            <p className="text-muted mb-0">Segundos</p>
          </div>
        </div>
      ) : (
        <h3 className="text-center text-success">O grande dia chegou! Boa sorte!</h3>
      )}
    </div>
  );
};

export default Countdown;