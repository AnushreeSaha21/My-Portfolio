import "../../src/App.css";
import forward from "../assets/forward.gif";

const projectCard = ({ item }) => {
  return (
    <div className="project-items">
      <h3>
        <a href={item.link}>{item.name}</a>
      </h3>

      <ul>
        {item.description.map((proj, index) => (
          <li key={index}>{proj}</li>
        ))}
      </ul>
      

      <div className="arrow">
        <a href={item.link}>
          <img src={forward} alt="forward-arrow" />
        </a>
      </div>
    </div>
  );
};

export default projectCard;
