import React from "react";
import "../../src/App.css";

const skillCard = ({ item }) => {
  return (
    <div className="card-skill">
      <h2>{item.heading}</h2>

      <div className="card-list">
        {item.skills.map((s, index) => (
          <span key={index}>{s}</span>
        ))}
      </div>
    </div>
  );
};

export default skillCard;
