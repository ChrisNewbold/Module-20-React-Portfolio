import React from "react";
import "./style.css"

// portfolio card layout
const Project = ({ data }) => {
  return (
    <section className="display">
      < article className="card" >
        <h3 className="project-title">{data.name}</h3>
        <p>{data.url}</p>
        <p className="display-image-gap">{data.repo}</p>
        <img
          src={require(`../../assets/images/portfolio/${data.feature}.png`)}
          alt={data.name}
          key={data.name}
        />
      </article >
    </section >
  );
};
// exports file
export default Project;
