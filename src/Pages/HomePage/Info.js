import React from 'react';
import clock from '../../assets/icons/clock.svg'
import map from '../../assets/icons/marker.svg' 
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (


        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-5 m-4 p-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-accent ">
                <figure className='pl-4 pt-4'>
                    <img src={clock} alt="Album"   />
                    </figure>
                <div className="card-body text-white ">
                    <h2 className="card-title">Opening Hours</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-primary">
                <figure className='pl-4 pt-4' ><img src={map} alt="Album" /></figure>
                <div className="card-body text-white  ">
                    <h2 className="card-title">Our Location</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl bg-secondary">
                <figure className='pl-4 pt-4' ><img src={phone} alt="Album" /></figure>
                <div className="card-body  text-white">
                    <h2 className="card-title">Contact Us</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>

                </div>
            </div>

        </div>


    );
};

export default Info;