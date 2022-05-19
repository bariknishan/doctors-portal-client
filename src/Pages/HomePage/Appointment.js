import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import MainButton from '../SharedPage/MainButton';
const Appointment = () => {
    return (
       <section style={{
           background: `url(${appointment})`
           
           }}
           
           className='flex justify-center items-center m-6 mt-16'>
           <div className='flex-1 hidden lg:block'>
               <img className='mt-[-100px]' src={doctor} alt="" />
           </div>
           <div className='flex-1 p-5'>
               <h3 className=' text-4xl font-bold text-lime-300'>Appointment!</h3>
               <h2 className='text-3xl text-white font-bold'> Make An Appointment Today!</h2>

               <p className='text-white py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem eveniet consequatur mollitia assumenda consequuntur beatae voluptas saepe obcaecati commodi. Cupiditate dicta libero aperiam dolorum quasi eveniet ab possimus. Esse minus voluptas, autem vero quia velit officia reiciendis sapiente culpa quod!</p>
               <MainButton></MainButton>
           </div>
       </section>
    );
};

export default Appointment;