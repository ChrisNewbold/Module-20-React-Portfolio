import React from "react";
import "./style.css";
import gitlogo from "../../../src/assets/images/github_reversed_logo.png";
import linkedin from "../../../src/assets/images/LinkedIn_reversed_logo.png";
import instagram from "../../../src/assets/images/Instagram_reversed_logo.png";

export default function Footer() {
  return (
    <footer id="footer">
      <div className="social-links">
        <a href="https://github.com/ChrisNewbold?tab=repositories">
          <img src={gitlogo} alt="github logo"></img>
        </a>
        <a href="https://au.linkedin.com/in/chris-newbold-34975124">
          <img src={linkedin} alt="linkedIn logo"></img>
        </a>
        <a href="https://www.instagram.com/newboldcreative/?hl=en">
          <img src={instagram} alt="instagram logo"></img>
        </a>
      </div>
    </footer >
  );
}
