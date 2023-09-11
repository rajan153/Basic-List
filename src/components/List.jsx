import React from "react";
import "./List.css";
import Heading from "./Heading";
import TimeCard from "./TimeCard";

function List(props) {
  return (
    <div className="list">
      <TimeCard month = {props.month} year = {props.year} date = {props.date}/>
      <Heading title={props.title} />
    </div>
  );
}

export default List;
