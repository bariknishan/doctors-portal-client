import React from 'react';
import quote from '../../assets/icons/quote.svg'
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testymonal = () => {
    const reviews = [

        {
            _id: 1,
            name: 'Barik',
            location: 'Dhaka',
            review: '',
            img: people1

        },
        {
            _id: 2,
            name: 'Tarik',
            location: 'Dhaka',
            review: '',
            img: people2

        },
        {
            _id: 3,
            name: 'Zarik',
            location: 'Dhaka',
            review: '',
            img: people3

        }
    ]
    return (
        <section className='my-28  '>
            <div className='flex justify-between content-center '>

                <div className=' text-center w-25 mx-auto '>
                    <h4 className='text-5xl text-primary font-bold  '>Testimonals</h4>
                    <h3 className='text-3xl text-black font-bold  '>What our patients say? </h3>
                </div>
                <div>

                    <img className=' w-24 lg:w-48' src={quote} alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-10 m-2'>

                {
                    reviews.map(review => <Review  key={review._id} review={review} ></Review>)
                }
            </div>
        </section>
    );
};

export default Testymonal;