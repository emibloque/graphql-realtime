import React from "react";
import "./Heart.scss";

export default ({active, onClick}) => (
  <div className={`heart ${active ? 'active': ''}`} onClick={onClick}>
    <svg height="315" width="342" viewBox="10 -10 315 342">
      <path
        d="M0 200 v-200 h200
    a100,100 90 0,1 0,200
    a100,100 90 0,1 -200,0
    z"
        strokeWidth="20px"
        transform="rotate(225,150,121)"
      />
    </svg>
  </div>
);
