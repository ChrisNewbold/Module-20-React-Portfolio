import React from 'react';
import background from "../../assets/images/Chris-Newbold-Profile-Picture.jpg";
import "./style.css"
import Grid from '@mui/material/Grid';
import Box from "@mui/material/Box";

function About(props) {
    const clickHandler = (e) => {
        props.setCurrentPage({ name: "contact" }); // calls the contact page for the contact button
    }
    // about me layout
    return (
        <Grid className="about-container" container >
            <Grid item xs={12} md={4} lg={3} p={1} justifyContent="flex-start">
                <Box sx={{ gap: 1 }}>
                    <article className="profile-card" style={{ backgroundImage: `url(${background})` }}>
                        <div className="profile-card-content">
                            <p id="profile-card-justification" className="profile-card-body">
                                <strong>Hidden Fact:</strong> Apart from Graphic Design, User Experience and Full Stack Development, my other interests include Muay Thai, Brazillian Jui Jitsu and playing bass in a band!
                            </p>
                            <button onClick={(e) => { clickHandler(e); }}><a className='aboutlink' href="#contact">Contact me</a></button>
                        </div>
                    </article>
                </Box>
            </Grid>
            <Grid item xs={12} md={8} lg={9} p={1} justifyContent="flex-start">
                <h2 id="About">About Me</h2>
                <div>
                    <p>Newbold Creative is a visual design agency with over 9 years of experience, specialising in wine, food and beverage branding and packaging design.</p>
                    <p>We believe in creating the best designs to cater to your business's personality that will help establish your brand recognition.</p>
                    <p>Newbold Creative bases its work on a new way of thinking within the branding and packaging design industry.</p>
                    <p>We offer an honest, intuitive approach when working with our clients, and as a result, our designs are fresh, modern and exciting.</p>
                    <p>The needs of our clients are our priority, and we work closely with them to achieve the best possible designs.</p>
                </div>
            </Grid>
        </Grid >
    );
};

// exports file
export default About;