import React from 'react';
// import Header from '../../components/Header';
import Banner from '../../components/Banner';
// import Cards from '../../components/Cards';
import About from '../../components/About';
import Skills from '../../components/Skills';
import Status from '../../components/Status';
import Service from '../../components/Service';
import Portfolio from '../../components/Portfolio';
import Contact from '../../components/Contact';
import HireMe from '../../components/HireMe';
import Resume from '../../components/Resume';
// import Partner from '../../components/Partner';
// import Footer from '../../components/Footer';

const Home = () => {
    return(
        <div id='top'>
            <Banner />
            <About />
            <Skills />
            <Status />
            <Service />
            <Portfolio />
            <HireMe />
            <Resume />
            {/* <Partner /> */}
            <Contact />
        </div>
    )
}
export default Home