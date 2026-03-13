import React from "react";
import "../../src/App.css";
import eduData from "./education.json";
import UserCard from "./userCard";

const education = () => {
  return (
    <div id="education">
      <div className="heading">
        <h2>Education</h2>
      </div>
      <div className="edu">
        {eduData.map((item) => (
          <UserCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default education;
