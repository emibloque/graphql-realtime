import React from "react";
import "./Card.scss";

export default props => (
  <div className="card">
    <header>{props.name}</header>
    <img src={props.image} alt="" />
    <footer>
      <div className="likes">{props.likes} likes</div>
      {props.comments && props.comments.map((comment, i) => (
        <div className="comment" key={i}><strong>{comment.author}</strong> {comment.text}</div>
      ))}
    </footer>
  </div>
);
