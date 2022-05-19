import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
  const [user]= useAuthState(auth)
  const [admin]=useAdmin(user)
    return (
        <div className="drawer drawer-mobile mt-8 text-center ">
  <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content ">
      <h2 className='text-4xl font-bold text-green-600'>Dashboard</h2>
 <Outlet></Outlet>
  
  </div> 
  <div className="drawer-side">
    <label for="dashboard-sidebar" className="drawer-overlay"></label> 
    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li><Link  to="/dashboard"> My Appointments</Link></li>
      <li><Link to="/dashboard/review">My Reviews</Link></li>
      <li><Link to="/dashboard/myhistory">My History</Link></li>
   {  admin && <li><Link to="/dashboard/users">All Users</Link></li>}
    </ul>
  
  </div>
</div>
    );
};

export default Dashboard;