import React from 'react';

import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loadind from '../SharedPage/Loadind';
import { Link, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';



const SignUp = () => {


    const { register, formState: { errors }, handleSubmit } = useForm();

    // google sign in auth 

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);


    // email and password auth
    const [
        createUserWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useCreateUserWithEmailAndPassword(auth);
console.log(eUser);
    // update -----------------

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);


    const [token]=useToken(eUser ,user)
    const navigate = useNavigate(user || eUser);



    let signInError;




    if (token) {
       
        navigate('/appointment');
    }


    if (loading || eLoading || updating) {
        return <Loadind></Loadind>
    }


    if (error || eError || updateError) {

        signInError = <p className='text-red-500'>{error?.message || eError?.message}</p>
    }



    const onSubmit = async data => {

        console.log(data);
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name });
        // console.log('update done');
       
    }





    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 bg-emerald-200 shadow-xl mt-4">
                <div className="card-body text-black">
                    <h2 className="text-center text-2xl font-bold">Sign Up</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>



                        {/*---------------------------------------- name ------------------------ */}

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give Your Name</span>

                            </label>
                            <input type="text" placeholder="Enter Name" className="input input-bordered text-white w-full max-w-xs"
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

                        <div className="form-control w-full max-w-xs">
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
                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Give Your password</span>

                            </label>
                            <input type="password" placeholder="enter password" className="input input-bordered text-white w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'password is required'
                                    },
                                    minLength: {
                                        value: 6,

                                        message: 'provide At least 6 characters long'
                                    }
                                })}
                            />

                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>



                        {signInError}
                        <input className='btn w-full max-w-xs text-white' type="submit" value="Sign Up" />
                    </form>
                    <p>Already Have an account? <Link to="/login" className='text-blue-400 font-bold' >Log in Here</Link></p>

                    <div className="divider ">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}

                        className="btn btn-warning">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;