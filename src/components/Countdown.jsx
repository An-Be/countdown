import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

export const Countdown = () => {
  const goal = dayjs("2023-11-01");

  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const calculateTime = (goal) => {
    const countDown = Date.parse(goal) - dayjs();
    setDays(Math.floor(countDown / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((countDown / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((countDown / 1000 / 60) % 60));
    setSeconds(Math.floor((countDown / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => calculateTime(goal), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="countdown">
      <h1>Count down</h1>
      <div className="countdown__wrapper">
        <div className="countdown__wrapper__days">
          <div className="timer">
            {" "}
            <span>{days}</span>
          </div>
          <div className="text">
            {" "}
            <span>Days</span>
          </div>
        </div>

        <div className="countdown__wrapper__hours">
          <div className="timer">
            {" "}
            <span>{hours}</span>
          </div>
          <div className="text">
            {" "}
            <span>Hours</span>
          </div>
        </div>

        <div className="countdown__wrapper__minutes">
          <div className="timer">
            {" "}
            <span>{minutes}</span>
          </div>
          <div className="text">
            {" "}
            <span>Minutes</span>
          </div>
        </div>

        <div className="countdown__wrapper__seconds">
          <div className="timer">
            {" "}
            <span>{seconds}</span>
          </div>
          <div className="text">
            <span>Seconds</span>
          </div>
        </div>
      </div>
    </div>
  );
};
