import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const UserRow = ({ user, refetch }) => {

  const { email, role } = user;

  const makeAdmin = () => {


    fetch(`http://localhost:5000/user/admin/${email}`, {

      method: 'PUT',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`
      }
    })
      .then(res => {

        if (res.status === 403) {
          toast.error('failed to male an admin')
        }

        return res.json()
      })


      .then(data => {
        if (data.modifiedCount > 0) {
          refetch()
          toast.success(`successfully made an admin `)
        }
      })
  }



  return (

    <tr>
      <th>1</th>
      <td>{email}</td>
      <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-active btn-primary">Make Admin</button>}</td>
      <td><button className="btn btn-active btn-secondary">Remove User</button></td>
    </tr>
  );
};

export default UserRow;