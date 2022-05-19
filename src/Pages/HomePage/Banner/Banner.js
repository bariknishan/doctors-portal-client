import React from 'react';
import chair from '../../../assets/images/chair.png'
import MainButton from '../../SharedPage/MainButton';
const Banner = () => {
    return (
        <div className="hero min-h-screen px-12      " >
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={chair} className="max-w-md rounded-lg  shadow-2xl"  alt=''/>
          <div className='text-black'>
            <h1 className="text-6xl font-bold">Keep Smiling Alltime</h1>
            <p className="py-6 text-2xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
           <MainButton></MainButton>
          </div>
        </div>
      </div>
    );
};

export default Banner;