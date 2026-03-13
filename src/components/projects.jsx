import projData from "./project.json"
import ProjCard from "./projectCard.jsx"

const projects = () => {
  return (
    <div id='projects'>
      <div className="heading">
        <h2><a href="https://github.com/AnushreeSaha21">Projects</a></h2>
      </div>

      <div className="project-container">
        <div className="card-project">

          {projData.map((item) => (
          <ProjCard key={item.id} item={item} />
        ))}
        </div>
      </div>
    </div>
  )
}

export default projects