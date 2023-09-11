import React from "react";

function Date(props) {
  return (
    <div className="mainTimeTable">
      <div className="month">{props.month}</div>
      <div className="year">{props.year}</div>
      <div className="date">{props.date}</div>
    </div>
  );
}

export default Date;
