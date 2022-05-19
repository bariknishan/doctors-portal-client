import React from 'react';

import floride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import white from '../../../assets/images/whitening.png'
import Service from '../Service/Service';
const Services = () => {

    const services = [
        {
            _id: 1,
            name: 'floride Treatement',
            Description: '',
            img: floride
        },
        {
            _id: 2,
            name: 'Cavity Treatement',
            Description: '',
            img: cavity
        },
        {
            _id: 3,
            name: 'Whitening Treatement',
            Description: '',
            img: white
        }
    ]
    return (
        <div className='mt-8'>
            <div className=' text-center'>

                <h2 className='text-primary text-4xl font-bold mt-16 mb-4'>OUR SERVICES 2022</h2>
                
            </div>

            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-4'>
                {
                    services.map(service => <Service
                        key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;