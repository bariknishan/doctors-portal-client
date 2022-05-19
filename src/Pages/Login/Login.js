import React, { useEffect } from 'react';
import auth from '../../firebase.init';
import { useAuthState, useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import Loadind from '../SharedPage/Loadind';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useToken from '../../Hooks/useToken';
const Login = () => {

    // react hook
    const { register, formState: { errors }, handleSubmit } = useForm();




    // google sign in auth 

    const [signInWithGoogle,user , loading, error] = useSignInWithGoogle(auth);

//  const [user]=useAuthState(auth)
    // email and password auth
    const [
        signInWithEmailAndPassword,
        eUser,
        eLoading,
        eError,
    ] = useSignInWithEmailAndPassword(auth);

    const[token]=useToken(user || eUser)
console.log(token)

// requare auth
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

     let signInError ;

    useEffect(()=>{

        if (token) {
            navigate(from, { replace: true });
        }
    },[token,from,navigate]
    
    ) ;


    if (loading || eLoading) {
        return <Loadind></Loadind>
    }

    
    if (error || eError){
      
        signInError=<p className='text-red-500'>{error?.message||eError?.message}</p>
     }



    const onSubmit = data => {

        console.log(data);
        signInWithEmailAndPassword(data.email,  data.password)
    }






    return (
        <div className=' flex h-screen justify-center items-center'>
            <div className="card w-96 bg-blue-100 shadow-xl">
                <div className="card-body text-black">
                    <h2 className="text-center text-2xl font-bold">Log In</h2>


                    <form onSubmit={handleSubmit(onSubmit)}>


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
                        <input className='btn w-full max-w-xs text-white' type="submit" value="LogIn" />
                    </form>
                    <p>New to Doctor'portal? <Link to="/signup" className='text-blue-400 font-bold' >Create New Account</Link></p>

                    <div className="divider ">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}

                        className="btn btn-warning">Continue with Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;