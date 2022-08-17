import React, {useState} from "react";
import { projectList } from "../data";

const Project = () => {
const [projects, setProject] = useState(projectList);


  return (
    <section className="project" id="portfolio">
      <ul className="project-list">
        <li>
          <div className="project-content section-content">
            <p className="section-subtitle">My Works</p>

            <h2 className="h3 section-title">
              See My Works Which Will Amaze You!
            </h2>

            <p className="section-text">
              We develop the best quality website that serves for the long-term.
              Well-documented, clean, easy and elegant interface helps any
              non-technical clients.
            </p>
          </div>
        </li>

        {projects.map((item) => {
            const {id,name,description,path,datetime} = item;
          <li key={id}>
            <a href="#" className="project-card">
              <figure className="card-banner">
                <img
                  src={path}
                  className="w-100"
                  alt={description}
                />
              </figure>

              <div className="card-content">
                <h3 className="h4 card-title">{name}</h3>

                <time className="publish-date" dateTime={datetime}>
                 {datetime}
                </time>
              </div>
            </a>
          </li>;
        })}

        <li>
          <button className="load-more">Load more work</button>
        </li>
      </ul>
    </section>
  );
};

export default Project;
