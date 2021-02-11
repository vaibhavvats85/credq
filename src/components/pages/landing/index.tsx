import React from 'react';
import About from '../../organisms/about';
import Demo from '../../organisms/demo';
import Footer from '../../organisms/footer';
import Header from '../../organisms/header';
import Home from '../../organisms/home';
import Works from '../../organisms/works';

const Landing = () => {
    return (
        <>
            <Header />
            <div id="#home">
                <Home />
            </div>
            <div id="#about">
                <About />
            </div>
            <div id="#works">
                <Works />
            </div>
            <Demo />
            <Footer />
        </>
    )
}

export default Landing;