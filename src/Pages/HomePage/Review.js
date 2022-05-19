import React from 'react';

const Review = ({review}) => {
    return (
        <div className="card  lg:max-w-lg bg-primary text-primary-content mb-16 p-4">
            <div className="card-body">
                
                <p>If a dog chews shoes whose shoes does he choose? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam tenetur reprehenderit quisquam veritatis aperiam assumenda suscipit quasi iusto eligendi iure!</p>
                <div className=" flex items-center">
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                            <img src={review.img} alt=""/>
                           
                        </div>
                        <div>
                            <h4 className='text-xl text-white'>{review.name}</h4>
                            <p> {review.location}</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;