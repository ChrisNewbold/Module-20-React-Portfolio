
import React from "react";
import "../../index.css"

function Navigation(props) {

    const {
        pages = [],
        setCurrentPage,
        currentPage
    } = props;

    return (
        <nav>
            <ul>
                <li>
                    <a href="#about" className={currentPage.name === 'about' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[0])}>About Me</a>
                </li>
                <li>
                    <a href="#portfolio" className={currentPage.name === 'portfolio' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[1])}>Portfolio</a>
                </li>
                <li>
                    <a href="#resume" className={currentPage.name === 'resume' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[2])}>Resume</a>
                </li>
                <li>
                    <a href="#contact" className={currentPage.name === 'contact' ? 'nav-active' : ''} onClick={() => setCurrentPage(pages[3])}>Contact</a>
                </li>
            </ul>
        </nav >
    );
};

export default Navigation;