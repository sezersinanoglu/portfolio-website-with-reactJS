import React from "react";

function Skill({ skills }) {
  return (
    <>
      {skills.map((skill, index) => {
        const { id, name, path } = skill;
        <li key={index}>
          <div className="skill-card">
            <div className="tooltip">{name}</div>
            <div className="card-icon">
              <img src={path} alt={`${name} logo`} />
            </div>
          </div>
        </li>;
      })}
    </>
  );
}

export default Skill;
