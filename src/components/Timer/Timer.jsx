import { useState, useEffect } from "react";
import { TimerIcon } from "lucide-react";
import "./Timer.scss";

function Timer({ duration = 30, onEnd }) {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      if (onEnd) onEnd();
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  return (
    <div className="timer">
      <TimerIcon className="timer__icon" />
      <span className="timer__count">{timeLeft}</span>
    </div>
  );
}

export default Timer;
