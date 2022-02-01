import React, { useEffect, useState } from "react";
import classes from "./CountDown.module.css";

const calculateTimeLeft = (returnDate) => {
  let year = new Date().getFullYear();
  let difference = +new Date(returnDate) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      d: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hr: Math.floor((difference / (1000 * 60 * 60)) % 24),
      min: Math.floor((difference / 1000 / 60) % 60),
      sec: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const CountDown = (props) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(props.returnDate));
  const [year] = useState(new Date().getFullYear());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft(props.returnDate));
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <p className={classes.timer}>
      {timerComponents.length ? timerComponents : <span>Time's up!</span>}
    </p>
  );
};

export default CountDown;
