import React from "react";
import "../../src/App.css";

const userCard = ({ item }) => {
  return (
    <div className="card">
      <div className="card-left">
        <h2>{item.degree}</h2>
        <h3>{item.college}</h3>
      </div>
      <div className="card-right">
        <p>{item.duration}</p>
        <p> {item.marks}</p>
      </div>
    </div>
  );
};

export default userCard;
