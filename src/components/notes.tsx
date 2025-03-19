import Image from "next/image";
import React from "react";
import { Option, Plus } from "../../public";
import NotesCard from "./notesCard";
import TaskModal from "./taskModal";

const Notes = () => {
  return (
    <div className="notes container">
      <div className="notes__title">
        <p className="notes__title-count">#2</p>
        <p className="notes__title-text">qwerty</p>
      </div>
      <div className="notes__head">
        <h5 className="notes__head-text">Tasks</h5>
        <div className="notes__head-more">
          <Image src={Option} alt="icon-opt" className="icon-img" />
        </div>
      </div>
      <div className="notes__cardwrapper">
        <NotesCard />
        <NotesCard />
        <NotesCard />
      </div>
      <TaskModal />
      <div className="notes__create">
        <Image src={Plus} alt="icon-plus" className="create-img" />
        <h4 className="create-text">Add Task</h4>
      </div>
      <div className="notes__info">
        <h5 className="info-count">
          Pommos: <span>0/1</span>
        </h5>
        <h5 className="info-count">
          Finish At: <span>16:02</span> (0.7h)
        </h5>
      </div>
    </div>
  );
};

export default Notes;
