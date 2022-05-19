
import './App.css';
import Navbar from './Pages/SharedPage/Navbar';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/HomePage/Home';
import About from './Pages/About/About';
import Login from './Pages/Login/Login';
import AppointPage from './Pages/AppointPage/AppointPage';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Pages/Dashboard/Dashboard';
import MyAppointment from './Pages/Dashboard/MyAppointment';
import Myreveiw from './Pages/Dashboard/Myreveiw';
import MyHistory from './Pages/Dashboard/MyHistory';
import Users from './Pages/Dashboard/Users';
import RequireAdmin from './Pages/Login/RequireAdmin';
import AddDoctor from './Pages/Dashboard/AddDoctor';
  

function App() {
  return (
   <div>
     <Navbar></Navbar>
     <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="home" element={<Home></Home>} />
        <Route path="about" element={<About></About>} />


        <Route path="appointment" element={<RequireAuth>

          <AppointPage></AppointPage>

        </RequireAuth>
        

        }>
     
        </Route>

        <Route path="dashboard" element={<RequireAuth> <Dashboard/></RequireAuth> } >

        <Route  index element={<MyAppointment></MyAppointment>}></Route>
        <Route  path="review" element={<Myreveiw></Myreveiw>}></Route>
        <Route  path="myhistory" element={<MyHistory></MyHistory>}></Route>
        <Route  path="users" element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
        <Route  path="addDoctor" element={<RequireAdmin><AddDoctor></AddDoctor></RequireAdmin>}></Route>

        </Route>

   


        <Route path="login" element={<Login></Login>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>
       
      <ToastContainer />
   </div>
  );
}

export default App;
