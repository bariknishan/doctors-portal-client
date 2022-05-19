import React from 'react';
import treatment from '../../../assets/images/treatment.png'
import MainButton from '../../SharedPage/MainButton';
const Exceptional = () => {
    return (
        <div className="hero min-h-screen mt-16 mb-16 ">
        <div className="hero-content flex-col lg:flex-row ">
          <img  src={treatment} className="max-w-sm rounded-lg shadow-2xl w-25 " alt='' />
          <div className='text-black ml-6'>
            <h1 className="text-5xl font-bold text-primary">Exceptional Dental Care On Your Terms</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nam inventore possimus deserunt, nulla, perferendis corrupti vitae et debitis omnis dolores ex voluptatum sapiente saepe minima tenetur dolore sit obcaecati cupiditate autem natus! Recusandae quae aperiam, adipisci dolore beatae cupiditate rem id fuga omnis, corporis itaque, vero incidunt! Architecto, tempore. </p>
          <MainButton></MainButton>
          </div>
        </div>
      </div>
    );
};

export default Exceptional;