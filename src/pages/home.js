import React from 'react';
import About from '../components/About/index.js';
import Portfolio from '../components/Portfolio/index';
import Contact from '../components/Contact';
import Resume from '../components/Resume/index.js';
import PageContent from '../components/PageContent/index.js';


export default function Page(props) {

    const renderPage = () => {
        switch (props.currentPage.name) {
            case "about":
                return <About setCurrentPage={props.setCurrentPage} />;
            case "portfolio":
                return <Portfolio />;
            case "resume":
                return <Resume />;
            case "contact":
                return <Contact />;
            default:
                return <About />;
        }
    };

    return (
        <section>
            <PageContent>{renderPage()}</PageContent>
        </section>
    );
}