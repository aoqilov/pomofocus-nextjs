"use client";
import Image from "next/image";
import { NextLogo } from "../../public";
import { useState, useEffect, useRef } from "react";
import { SavedTimer } from "@/interface/saved-timer";

type TimerType = {
  id: number;
  label: string;
  color: string;
  time: number;
};

const Timer = () => {
  const initialTimers: TimerType[] = [
    {
      id: 1,
      label: "Pomodoro",
      color: "#ba4949",
      time: 45,
    },
    {
      id: 2,
      label: "Short break",
      color: "#38858a",
      time: 5,
    },
    {
      id: 3,
      label: "Long break",
      color: "#397097",
      time: 15,
    },
  ];

  const [timers, setTimers] = useState(initialTimers);
  const [activeTimer, setActiveTimer] = useState(timers[0]);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(activeTimer.time * 60);
  const timerIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const getSavedTimes = (): SavedTimer | {} => {
    return JSON.parse(localStorage.getItem("timers") || "{}");
  };

  const setSavedTimers = (savedTimes: SavedTimer) => {
    const { pomodoro, shortBreak, longBreak } = savedTimes;
    setTimers(
      initialTimers.map((timer) => {
        switch (timer.id) {
          case 1:
            return { ...timer, time: pomodoro };
          case 2:
            return { ...timer, time: shortBreak };
          case 3:
            return { ...timer, time: longBreak };
          default:
            return timer;
        }
      })
    );
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const toggleTimer = () => {
    setIsRunning((prevIsRunning) => {
      if (!prevIsRunning) {
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
        }

        timerIntervalRef.current = setInterval(() => {
          setTimeLeft((prevTime) => {
            if (prevTime <= 1) {
              clearInterval(timerIntervalRef.current!);
              setIsRunning(false);
              return 0;
            }
            return prevTime - 1;
          });
        }, 1000);
        return true;
      } else {
        if (timerIntervalRef.current) {
          clearInterval(timerIntervalRef.current);
          timerIntervalRef.current = null;
        }
        return false;
      }
    });
  };

  const handleTimerChange = (timer: TimerType) => {
    if (isRunning && timerIntervalRef.current) {
      clearInterval(timerIntervalRef.current);
      timerIntervalRef.current = null;
      setIsRunning(false);
    }

    setActiveTimer(timer);
    setTimeLeft(timer.time * 60);
  };

  const handleNextTimer = () => {
    const currentIndex = timers.findIndex(
      (timer) => timer.id === activeTimer.id
    );
    const nextIndex = (currentIndex + 1) % timers.length;
    handleTimerChange(timers[nextIndex]);
  };

  useEffect(() => {
    const savedTimes = getSavedTimes();
    if (Object.keys(savedTimes).length) {
      setSavedTimers(savedTimes);
    }
  }, []);

  useEffect(() => {
    setActiveTimer(timers[0]);
    setTimeLeft(timers[0].time * 60);
  }, [timers]);

  useEffect(() => {
    document.title = `${formatTime(timeLeft)} - ${activeTimer.label}`;
  }, [timeLeft, activeTimer]);

  useEffect(() => {
    document.body.style.backgroundColor = activeTimer.color;
  }, [activeTimer]);

  useEffect(() => {
    return () => {
      if (timerIntervalRef.current) {
        clearInterval(timerIntervalRef.current);
        timerIntervalRef.current = null;
      }
    };
  }, []);

  return (
    <div className="timer container">
      <div className="timer__menu">
        {timers.map((timer) => (
          <div
            key={timer.id}
            className={`timer__menu-text ${
              timer.id === activeTimer.id ? "active" : ""
            }`}
            onClick={() => handleTimerChange(timer)}
          >
            {timer.label}
          </div>
        ))}
      </div>
      <div className="timer__table">
        <p className="timer__table-time">{formatTime(timeLeft)}</p>
        <div className="timer__table-buttons">
          <button
            className={`start-btn ${isRunning ? "pause" : ""}`}
            onClick={toggleTimer}
          >
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="next-btn" onClick={handleNextTimer}>
            <Image src={NextLogo} alt="next-icon" className="next-icon" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
