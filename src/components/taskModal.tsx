"use client";

import { useState } from "react";
import Image from "next/image";

import { CaretDown, CaretUp } from "../../public";

const TaskModal = () => {
  const [task, setTask] = useState<string>("");
  const [pomodoros, setPomodoros] = useState<number>(1);

  return (
    <div>
      <div className="modal">
        <input
          type="text"
          placeholder="What are you working"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="modal__input"
        />

        <div className="modal__count">
          <h4 className="count-text">Est Pomodoros</h4>
          <div className="count-box">
            <input
              type="number"
              min="1"
              value={pomodoros}
              onChange={(e) => setPomodoros(Number(e.target.value))}
              className={"count-input"}
            />
            <div className={"count-btns"}>
              <button onClick={() => setPomodoros((p) => p + 1)}>
                <Image className="icon-img" src={CaretUp} alt="icon" />
              </button>
              <button onClick={() => setPomodoros((p) => Math.max(1, p - 1))}>
                <Image className="icon-img" src={CaretDown} alt="icon" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={"modal__foter"}>
        <button className={"cancel"}>Cancel</button>
        <button className={"save"}>Save</button>
      </div>
    </div>
  );
};

export default TaskModal;
