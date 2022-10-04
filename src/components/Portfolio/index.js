// import React from "react";
import Project from "../Project/index.js";
import textEditor from "../../assets/images/portfolio/pwa-text-editor.png"
import '../../components/Project/style.css'

// Portfolio section assigning the images and info to each individual card
function Portfolio(props) {
  const featurePhotos = [
    {
      name: "PWA Text Editor",
      imgsrc: textEditor,
      feature: "pwa-text-editor",
      url: (
        <a href="https://module-19-pwa-text-editor.herokuapp.com/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/Module-19-PWA-Text-Editor">
          Project Repo
        </a>
      ),
    },
    {
      name: "Tech Blog",
      feature: "tech-blog",
      url: (
        <a href="https://chris-newbold-tech-blog.herokuapp.com/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/Module-14-Tech-Blog">
          Project Repo
        </a>
      ),
    },
    {
      name: "Recipe Findr",
      feature: "recipe-findr",
      url: (
        <a href="https://hayleyarodgers.github.io/recipe-finder/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/recipe-finder">Project Repo</a>
      ),
    },
    {
      name: "Workday Scheduler",
      feature: "workday-scheduler",
      url: (
        <a href="https://chrisnewbold.github.io/05-Third-Party-APIs-Chris-Newbold-Work-Day-Scheduler/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/05-Third-Party-APIs-Chris-Newbold-Work-Day-Scheduler">
          Project Repo
        </a>
      ),
    },
    {
      name: "Weather Dashboard",
      feature: "weather-dashboard",
      url: (
        <a href="https://chrisnewbold.github.io/06-Challenge-Weather-Dashboard/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/06-Challenge-Weather-Dashboard">
          Project Repo
        </a>
      ),
    },
    {
      name: "Password Generator",
      feature: "password-generator",
      url: (
        <a href="https://chrisnewbold.github.io/02-Challenge-Chris-Newbold-JavaScript/">
          Live Application
        </a>
      ),
      repo: (
        <a href="https://github.com/ChrisNewbold/02-Challenge-Chris-Newbold-JavaScript">
          Project Repo
        </a>
      ),
    },
  ];
  // returns the project file
  return (
    <div className="project-image mb-5">
      {featurePhotos.map((project) => (
        <Project data={project} />
      ))}
    </div>
  );
}

export default Portfolio;
