import React, { useEffect, useState } from 'react';

const TimeForSale = ({ deathline }) => {
  let timeCalculate = () => {
    let difference = new Date(deathline) - new Date();
    let timeleft = {};
    if (difference > 0) {
      timeleft = {
        day: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeleft;
  };

  let [timeLeft, setTimeLeft] = useState(timeCalculate());

  useEffect(() => {
    const timevalue = setInterval(() => {
      setTimeLeft(timeCalculate());
    }, 1000);
    return () => clearInterval(timevalue);
  }, [deathline]);
  return (
    <>
      <div className="flex items-center gap-2.5">
        <p className="text-white font-display font-medium ">
          {timeLeft.day} Days
        </p>
        <p className="text-white font-display font-medium ">
          {timeLeft.hours} Hour
        </p>
        <p className="text-white font-display font-medium ">
          {timeLeft.minutes} Min
        </p>
        <p className="text-white font-display font-medium ">
          {timeLeft.seconds} Sec
        </p>
      </div>
    </>
  );
};

export default TimeForSale;
