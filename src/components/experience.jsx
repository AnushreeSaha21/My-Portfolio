import React from 'react'
import "../../src/App.css";
import expData from "./experience.json";
import ExpCard from "./expCard";


const experience = () => {
  return (
   <div id="experience">
      <div className="heading">
        <h2>Experience</h2>
      </div>
      <div className="exp">
        {expData.map((item) => (
          
          <ExpCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  )
}

export default experience