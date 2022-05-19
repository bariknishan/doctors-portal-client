import React from 'react';
import bg from '../../../assets/images/appointment.png'
const Contact = () => {
    return (

        <div className="hero " style={{background: `url(${bg})` }}     >
        
          <div className="card flex-shrink-0 w-full max-w-sm p-4 rounded-lg ">

              <h1 className='text-center text-3xl text-secondary mt-4'> Stay Connected With Us</h1>

            <div className="card-body text-white text-center  ">
              <div className="form-control">
                <input type="text" placeholder="email" className="p-2  rounded-md   " />
              </div>

              <div className="form-control  ">
                <input type="text" placeholder="Subject" className=" p-2 rounded-md   " />
              </div>

              <div className="form-control">
               <textarea type="text " placeholder='Your Message' name="" id="" cols="10" rows="5" className='   rounded-md '></textarea>
              </div>
           
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </div>
          </div>
        
      </div>

    );
};

export default Contact;