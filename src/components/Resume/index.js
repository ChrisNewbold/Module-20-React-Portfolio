import React from "react";
import "./style.css";
import resumepdf from "../../assets/images/Chris_Resume.pdf";
// resume layout
function Resume() {
  return (
    <section className="resume-top" id="resume">
      <h1>CHRIS NEWBOLD</h1>
      <p>New South Wales, Australia</p>
      <a href="mailto:chris@newboldcreative.com">
        email: chris@newboldcreative.com
      </a>
      <div>
        <p>
          Click{" "}
          <span>
            <a href={resumepdf}>HERE</a>
          </span>{" "}
          to access a downloadable PDF version of this document.
        </p>
        <h3>Front-end Proficiencies</h3>
        <ol className="proficiencies">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>Responsive design</li>
          <li>React</li>
          <li>Bootstrap</li>
        </ol>
        <h3>Back-end Proficiencies</h3>
        <ol className="proficiencies">
          <li>APIs</li>
          <li>Node</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>REST</li>
          <li>GraphQL</li>
        </ol>
      </div>
    </section>
  );
}
// exports file
export default Resume;
