import React from 'react';
import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';




const AppointBanner = ({date, setDate}) => {

   
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-15">
          <img src={chair} className="max-w-md rounded-lg shadow-2xl" alt='dentist chair' />
          <div className='text-black'>
          <DayPicker 
          
          mode="single"
          selected={date}
          onSelect={setDate}
          
          />
         
          </div>
        </div>
      </div>
    );
};

export default AppointBanner;