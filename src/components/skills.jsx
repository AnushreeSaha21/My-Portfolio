import SkillCard from "./skillCard"
import skillsData from "./skills.json"

const skills = () => {
  return (
    <div id="skills">
      <div className="heading">
        <h2>Skills</h2>
      </div>
      <div className="tech-skill">
        {skillsData.map((item) => (
          // Use the separate component and pass props
          <SkillCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default skills;
