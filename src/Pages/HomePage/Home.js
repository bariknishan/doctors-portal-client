import React from 'react';
import Appointment from './Appointment';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Exceptional from './Exceptional/Exceptional';
import Footer from './Footer/Footer';
import Info from './Info';
import Services from './Services/Services';
import Testymonal from './Testymonal';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Info></Info>
           <Services></Services>
           <Exceptional></Exceptional>
           <Appointment></Appointment>
           <Testymonal></Testymonal>
           <Contact></Contact>
           <Footer></Footer>
        </div>
    );
};

export default Home;