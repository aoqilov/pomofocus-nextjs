import Image from "next/image";
import React from "react";
import { BlackOption } from "../../public";

const NotesCard = () => {
  return (
    <div className="notes__card ">
      {/*notes__card-title  "active"  */}
      <div className="notes__card-title">
        <span className="check "></span>
        <h4 className="title-text">title</h4>
      </div>
      <div className="notes__card-more">
        <h4 className="big-num">
          0/ <span className="small-num">1</span>{" "}
        </h4>
        <div className="icon-box">
          <Image src={BlackOption} alt="icon-opt" className="icon-img" />
        </div>
      </div>
    </div>
  );
};

export default NotesCard;
