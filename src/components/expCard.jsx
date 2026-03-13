import React from "react";
import "../../src/App.css";

const expCard = ({ item }) => {
  return (
    <div className="card-exp">
      <h2>{item.position}</h2>
      <h4>{item.company}</h4>
      <ul>
       
        {item.responsibilities.map((respo, index) => (
          <li key={index}>{respo}</li>
        ))}
      </ul>
    </div>
  );
};

export default expCard;
