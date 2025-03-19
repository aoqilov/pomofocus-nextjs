"use client";
import React, { useState, ChangeEvent } from "react";
import Modal from "./Modal/Modal";
import { SavedTimer } from "@/interface/saved-timer";

type ConfigModalProps = {
  closeModal: () => void;
};

const ConfigModal: React.FC<ConfigModalProps> = ({ closeModal }) => {
  const getTimers = (): SavedTimer => {
    try {
      return JSON.parse(
        localStorage.getItem("timers") ||
          "{ pomodoro: 50, shortBreak: 5, longBreak: 15 }"
      );
    } catch {
      return { pomodoro: 50, shortBreak: 5, longBreak: 15 };
    }
  };

  const saveTimers = (timers: SavedTimer) => {
    localStorage.setItem("timers", JSON.stringify(timers));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTimers((prev) => ({
      ...prev,
      [name]: Number(value) || 0,
    }));
  };

  const [timers, setTimers] = useState<SavedTimer>(getTimers);

  return (
    <Modal
      onClose={closeModal}
      title="SETTING"
      footerContent={
        <div className="modal-actions">
          <button
            onClick={closeModal}
            className="modal-button modal-button-secondary"
          >
            Cancel
          </button>
          <button
            className="modal-button modal-button-primary"
            onClick={() => {
              saveTimers(timers);
              closeModal();
            }}
          >
            Save
          </button>
        </div>
      }
    >
      <div className="timer-container">
        <h3>
          <span className="timer-icon">⏱</span>
          TIMER
        </h3>
        <div>
          <h4>Time (minutes)</h4>
          <div className="time-inputs">
            <div className="time-input-group">
              <p className="time-input-label">Pomodoro</p>
              <input
                type="number"
                className="time-input"
                name="pomodoro"
                value={timers.pomodoro}
                onChange={handleChange}
              />
            </div>
            <div className="time-input-group">
              <p className="time-input-label">Short Break</p>
              <input
                type="number"
                className="time-input"
                name="shortBreak"
                value={timers.shortBreak}
                onChange={handleChange}
              />
            </div>
            <div className="time-input-group">
              <p className="time-input-label">Long Break</p>
              <input
                type="number"
                className="time-input"
                name="longBreak"
                value={timers.longBreak}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ConfigModal;
