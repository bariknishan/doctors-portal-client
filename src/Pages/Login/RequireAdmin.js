
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';
import Loadind from '../SharedPage/Loadind';
import { signOut } from 'firebase/auth';
const RequireAdmin = ({children}) => {
    let location = useLocation();
    const [user, loading] = useAuthState(auth);
 const [admin,adminLoading]=useAdmin()

    if(loading || adminLoading){
        <Loadind></Loadind>
    }
if (!user || !admin){
    signOut(auth)
    return <Navigate to="/login"  state={{from: location }}replace></Navigate>
}


   return children ;
};

export default RequireAdmin;