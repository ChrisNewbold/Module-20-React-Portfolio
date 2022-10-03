import React from "react";
import "./style.css";
import resumepdf from "../../assets/images/Chris_Resume.pdf";

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
      </div>
    </section>
  );
}

export default Resume;
