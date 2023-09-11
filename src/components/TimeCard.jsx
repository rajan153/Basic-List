import React from "react";
import "./TimeCard.css";

function TimeCard(props) {
  return (
    <div className="timeCard">
      <h1>{props.month}</h1>
      <h1>{props.year}</h1>
      <h1 className="date">{props.date}</h1>
    </div>
  );
}

export default TimeCard;
