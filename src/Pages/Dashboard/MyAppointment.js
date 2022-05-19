import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointment = () => {

  const [appointments, setAppointments] = useState([])
  const [user] = useAuthState(auth)
  const navigate = useNavigate()
  useEffect(() => {
    const email = user?.email;
    fetch(`http://localhost:5000/booking?patient=${email}`, {

      method: 'GET',
      headers: {
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    })

      .then(res => {
        console.log('res', res)
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem('accessToken')
          navigate('/')
        }


        return res.json()

      })
      .then(data => {

        setAppointments(data)
      })


  }, [user])


  console.log(user.email)
  return (
    <div className='text-center m-4'>
      <h2 className='text-3xl text-green-400 font-bold mt-4 mb-4'>My Appointment:{appointments.length}</h2>

      <div class="overflow-x-auto">
        <table class="table w-full">

          <thead>
            <tr>

              <th>Name</th>
              <th>Email</th>
              <th>Date</th>
              <th>Time</th>
              <th>Treatemnt</th>
            </tr>
          </thead>

          <tbody>

            {
              appointments.map((a, index) =>

                <tr>
                  <th>{index + 1}</th>
                  <td>{a.patient}</td>
                  <td>{a.date}</td>
                  <td>{a.slot}</td>
                  <td>{a.treatment}</td>
                </tr>
              )
            }

          </tbody>
        </table>
      </div>

    </div>
  );
};

export default MyAppointment;