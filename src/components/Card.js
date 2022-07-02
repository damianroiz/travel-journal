import React from "react"

export default function Card(props) {
    return (
    <div className="cards-container">
        <div className="card">
        <img src={props.imageUrl} alt="" className="card-image"/>
        <div className="card-info">
         <div className="location-info">
            <img src="./images/path.png" alt="" className="loc-icon"/>
            <p className="location">{props.location}</p>
            <a href={props.googleMapsUrl}>View On Google Maps</a>
         </div>
         <div className="card-info">
            <h2>{props.title}</h2>
            <p className="dates">{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
         </div>
        </div> 
        </div>
        <hr />
    </div>
    
    )
}