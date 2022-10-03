import React from "react";
import "../../index.css"

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about" onClick={() => setCurrentPage(pages[0])}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" onClick={() => setCurrentPage(pages[1])}>Portfolio</a>
                </li>
                <li>
                    <a href="#resume" onClick={() => setCurrentPage(pages[2])}>Resume</a>
                </li>
                <li>
                    <a href="#contact" onClick={() => setCurrentPage(pages[3])}>Contact</a>
                </li>
            </ul>
        </nav >
    );
};

export default Navigation;