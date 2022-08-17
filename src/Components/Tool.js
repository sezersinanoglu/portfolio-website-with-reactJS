import React from 'react'

function Tool({tools}) {
  return (
    <>
    {tools.map((tool, index) => {
      const { id, name, path } = tool;
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
  )
}

export default Tool;
