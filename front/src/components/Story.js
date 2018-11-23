import React from "react";
import "./Story.scss";

export default props => (
  <div className="story" style={{ backgroundImage: `url(${props.image})` }} />
);
