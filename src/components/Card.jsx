import React from "react";
import "./Card.css"
import List from "./List";

function Card() {
    return (
        <div className="card">
            <List title = "Nirma" month = "September" year = "2023" date = "10"/>
            <List title = "Surf Excel" month = "March" year = "2023" date = "02"/>
            <List title = "Tide" month = "January" year = "2023" date = "28"/>
            <List title = "Maggie" month = "June" year = "2023" date = "12"/>
        </div>
    )
}

export default Card;