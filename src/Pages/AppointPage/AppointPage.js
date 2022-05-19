import React, { useState } from 'react';
import Footer from '../HomePage/Footer/Footer';
import AppointBanner from './AppointBanner';
import AvailableAppoint from './AvailableAppoint';

const AppointPage = () => {
    const [date, setDate]=useState(new Date())
    return (
        <div>
            <AppointBanner date={date} setDate={setDate}></AppointBanner>
            <AvailableAppoint date={date}></AvailableAppoint>
            <Footer ></Footer>
        </div>
    );
};

export default AppointPage;