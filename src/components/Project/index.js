import React from "react";

const Project = ({ data }) => {
  return (
    <section id="portfolio" className="display">
      <div>
        <div>
          <h3 className="project-title">{data.name}</h3>
          <p>{data.url}</p>
          <p>{data.repo}</p>
          <img
            src={require(`../../assets/images/portfolio/${data.feature}.png`)}
            alt={data.name}
            key={data.name}
          />
        </div>
      </div>
    </section>
  );
};

export default Project;
