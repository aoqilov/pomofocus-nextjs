import Image from "next/image";
import { NextLogo } from "../../public";

const Timer = () => {
  return (
    <div className="timer container">
      <div className="timer__menu">
        <h4 className="timer__menu-text active">Pomodoro</h4>
        <h4 className="timer__menu-text">Short break</h4>
        <h4 className="timer__menu-text">Long break</h4>
      </div>
      <div className="timer__table">
        <p className="timer__table-time">45:00</p>
        <div className="timer__table-buttons">
          <button className="start-btn">Start</button>
          <button className="next-btn">
            <Image src={NextLogo} alt="next-icon" className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
