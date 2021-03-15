import React from 'react';
import About from '../../organisms/about';
import Demo from '../../organisms/demo';
import Home from '../../organisms/home';
import Works from '../../organisms/works';

const Landing = () => {
    return (
        <div className="landing">
            <div id="#home">
                <Home />
            </div>
            <div id="#about">
                <About />
            </div>
            <div id="#works">
                <Works />
            </div>
            <div id="#demo">
                <Demo />
            </div>
        </div>
    )
}

export default Landing;