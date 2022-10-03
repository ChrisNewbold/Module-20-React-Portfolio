import React from "react";
import "./style.css"

const Project = ({ data }) => {
  return (
    <section id="portfolio" className="display">
      <article className="card">
        <h3 className="project-title">{data.name}</h3>
        <p>{data.url}</p>
        <p>{data.repo}</p>
        <img
          src={require(`../../assets/images/portfolio/${data.feature}.png`)}
          alt={data.name}
          key={data.name}
        />
      </article>
    </section>
  );
};

export default Project;
