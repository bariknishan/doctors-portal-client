import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import Loadind from '../SharedPage/Loadind';

const AddDoctor = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/service').then(res => res.json()));

    const onSubmit = async data => {

        console.log('data', data);

        // console.log('update done');

    }

    if (isLoading) {
        return <Loadind></Loadind>
    }

    return (
        <div className='border-green-400 '>
            <h2 className='text-3xl font-bold text-blue-500 mt-4'>Add A Doctor</h2>

            <form className='text-center  rounded-md    ' onSubmit={handleSubmit(onSubmit)}>

                {/*---------------------------------------- name ------------------------ */}

                <div className="form-control w-full max-w-xs  mx-auto">
                    <label className="label">
                        <span className="label-text">Give Your Name</span>

                    </label>
                    <input type="text" placeholder="Enter Name" className="input input-bordered text-white  w-full max-w-xs"
                        {...register("name", {

                            required: {
                                value: true,
                                message: 'name is required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>


                {/*---------------------- email ---------------  */}

                <div className="form-control w-full max-w-xs  mx-auto">
                    <label className="label">
                        <span className="label-text">Give Your Email</span>

                    </label>
                    <input type="email" placeholder="enter email" className="input input-bordered w-full text-white max-w-xs"
                        {...register("email", {

                            required: {
                                value: true,
                                message: 'email is required'
                            },
                            pattern: {
                                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                message: 'provide valid  email'
                            }


                        })}



                    />
                    <label className="label">
                        {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                        {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                    </label>
                </div>



                {/* password  */}
                <div className="form-control w-full max-w-xs mx-auto  ">
                    <label className="label">
                        <span className="label-text">Speciality</span>

                    </label>

                    <select {...register('speciality')} className="select mb-2 w-full max-w-xs">

                        {
                            services.map(service => <option

                                key={service._id}
                                value={service.name}

                            > {service.name} </option>)
                        }


                    </select>

                </div>


              {/* <picture>---------------------</picture> */}

              <div className="form-control w-full max-w-xs mx-auto">
                    <label className="label">
                        <span className="label-text text-black">Photo</span>

                    </label>
                    <input type="file" placeholder="Enter Name" className="input input-bordered  green-500 text-white  w-full max-w-xs"
                        {...register("image", {

                            required: {
                                value: true,
                                message: 'image is required'
                            }
                        })}
                    />

                    <label className="label">
                        {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                    </label>
                </div>
   



                <input className='btn btn-warning  w-full max-w-xs text-black-400 ' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddDoctor;