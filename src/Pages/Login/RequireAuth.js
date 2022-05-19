import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import Loadind from '../SharedPage/Loadind';

const RequireAuth = ({children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);


    if(loading){
        <Loadind></Loadind>
    }
if (!user){
    return <Navigate to="/login"  state={{from: location }}replace></Navigate>
}


   return children ;
};

export default RequireAuth;