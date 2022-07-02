import React from "react"

export default function Card(props) {
    <div className="card-container">
        <img src={props.image} alt=""/>
        <div className="card-info">
         <div className="location-info">
            <img src="./images/path.png" alt=""/>
            <span>{props.location}</span>
            <small>{props.googleMapsUrl}</small>
         </div>
         <div className="card-info">
            <h2>{props.title}</h2>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
         </div>
        </div>    
    </div>
}