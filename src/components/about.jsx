import React, { useState } from "react";
import "../../src/App.css";
import githubImg from "../assets/github.png";
import linkedInImg from "../assets/linkedin.png";
import leetcodeImg from "../assets/leetcode.png";
import gfgImg from "../assets/gfg.png";

const About = () => {

    const [copied,setCopied] = useState(false);
    const email = "s.anushree@iitg.ac.in";

    const handleCopy = () =>{
      navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(()=> setCopied(false),2000);
    };

  return (
    <div id="about">
      <div id="about-bg">
        <div id="col1"></div>
        <div id="col2"></div>
        <div id="col3"></div>
        <div id="col4"></div>
        <div id="col5"></div>
        <div id="col6"></div>
      </div>

      <div id="about-txt">
        
        <div className="about-content">
          <div className="text-section">
            <h1>Hey!! I am <br/> Anushree Saha</h1>
            <p>
              My interest lies in development and emerging technologies. I'm
              enthusiastic about learning, building scalable solutions, and
              applying research-driven knowledge to practical applications.
            </p>
          </div>

          <div id="contact-container">

             {/* left side */}
            <div id="contact-socials">
              <p className="label">Find me on:</p>
              <div id="links">
                <a href="your-github-url">
                  <img src={githubImg} alt="Github" /> GitHub
                </a>
                <a href="your-linkedin-url">
                  <img src={linkedInImg} alt="LinkedIn" /> LinkedIn
                </a>
                <a href="your-github-url">
                  <img src={leetcodeImg} alt="Github" /> Leetcode
                </a>
                <a href="your-github-url">
                  <img src={gfgImg} alt="Github" /> GeeksforGeeks
                </a>
              </div>
            </div>

            {/* right side */}
            <div id="contact-email">
              <p className="label">Contact:</p>
              <div className="email-wrapper" onClick={handleCopy} title="Click to copy email">
                <span>You can reach me out at:</span>
                <span className="email-address">
                  {email}
                  <span className={`copy-popup ${copied ? "show" : ""}`}>Copied!</span>
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
