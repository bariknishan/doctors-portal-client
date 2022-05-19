import React from 'react';

const Service = ({service,setTreatment}) => {
    const{name, slots}=service ;
    return (
        <div className="card lg:max-w-lg  bg-green-400 mb-4 shadow-xl text-black ">
        <div className="card-body ">
          <h2 className="card-title ">{name}</h2>
          <p>{
              
             slots.length > 0 ? <span>{slots[0]}</span> 
             :<span className='text-red-500'>No slot Available</span>
              }</p>
          <p>{slots.length}  {slots.length > 1 ? 'spaces' :'space'}  Available </p>
          <div className="card-actions justify-start">
              
           

             <label htmlFor="booking-modal"
               onClick={()=>setTreatment(service)}
               disabled={slots.length===0}
             className="btn btn-primary">Book Now</label>
          </div>
        </div>
      </div>
    );
};

export default Service;