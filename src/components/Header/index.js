import React from "react";
import "./index.scss";
import arrIcon from "../../assets/images/arrow.png";
import switchIcon from "../../assets/images/switch.png";

export default function Header() {
  return (
    <div className="header">
      <span className="icon-arrow">
        <img src={arrIcon} alt="arrow icon" />
      </span>
      <h1 className="title">STATIONS</h1>
      <span className="icon-power">
        <img src={switchIcon} alt="power icon" />
      </span>
    </div>
  );
}
