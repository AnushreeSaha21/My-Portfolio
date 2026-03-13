import { useState } from "react";
import "../../src/App.css";
//import flowerImg from "../assets/flower.jpg";
import iconImg from "../assets/giphy.gif";
import downloadImg from "../assets/download.png";
import lightMode from "../assets/light-mode.png";
import darkMode from "../assets/dark-mode.png";

import myResume from "../assets/Anushree_Resume.pdf";

const navbar = () => {
  const [theme, setTheme] = useState(false);

  const toggleTheme = () => {
    const newTheme = !theme;
    setTheme(newTheme);

    if (newTheme) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  };

  return (
    <>
      <div id="nav">
        <div className="left">
          <div id="nav-logo">
            <a href="#about">
              <img src={iconImg} alt="laptop" />
            </a>
          </div>
        </div>

        <div className="middle">
          <div className="nav-button">
            <a href="#education">Education</a>
          </div>
          <div className="nav-button">
            <a href="#experience">Experience</a>
          </div>
          <div className="nav-button">
            <a href="#projects">Projects</a>
          </div>
          <div className="nav-button">
            <a href="#skills">Skills</a>
          </div>
        </div>

        <div className="right">
          <div className="download-button">
            <a href={myResume} download="Anushree_Saha_Resume.pdf">
              <img src={downloadImg} alt="download" />
            </a>
          </div>

          <div className="mode">
        <img
          src={theme ? darkMode : lightMode} 
          alt="toggle theme"
          onClick={toggleTheme}
          style={{ cursor: 'pointer' }}
        />
      </div>
        </div>
      </div>
    </>
  );
};

export default navbar;
