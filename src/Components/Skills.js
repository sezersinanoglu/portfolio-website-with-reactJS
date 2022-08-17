import React, { useState } from "react";
import Skill from "../Components/Skill";
import Tool from "../Components/Tool";

import { skillList } from "../data";
import { toolsList } from "../data";

function Skills() {
  const [skills, setSkills] = useState(skillList);
  const [tools, setTools] = useState(toolsList);

  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>

        <h2 className="h3 section-title">
          What My Programming Skills Included?
        </h2>

        <p className="section-text">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>

        <div className="skills-toggle" data-toggle-box>
          <button className="toggle-btn active" data-toggle-btn>
            Skills
          </button>

          <button className="toggle-btn" data-toggle-btn>
            Tools
          </button>
        </div>
      </div>

      <div className="skills-box" data-skills-box>
        <ul className="skills-list">
          <Skill skills={skills} />
        </ul>

        <ul className="tools-list">
          <Tool tools={tools} />
        </ul>
      </div>
    </section>
  );
}

export default Skills;
