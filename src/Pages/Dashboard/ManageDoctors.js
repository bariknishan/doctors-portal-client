import React, { useState } from 'react';
import { useQuery } from 'react-query';

import Loadind from '../SharedPage/Loadind';
import DeleteModal from './DeleteModal';
import DoctorRow from './DoctorRow';

const ManageDoctors = () => {
const[deleteDoctor,setDeleteDoctor]= useState(null)
  

const {data: doctors , refetch,isLoading}=useQuery('doctors', ()=> fetch('http://localhost:5000/doctor',{

headers:{
    authorization: `Bearer ${localStorage.getItem('accessToken')}`
},

}).then(res=>res.json()) )



if(isLoading){
    return <Loadind></Loadind>
}

    return (
        <div>
            <h2 className='text-3xl text-black'>Manage Doctors:{doctors.length}</h2>

            <div class="overflow-x-auto m-2">
  <table className="table w-full mt-4 m-4">
    
    <thead >
      <tr className=''>
        <th>Serial</th>
        <th>Avatar</th>
        <th>Name</th>
        <th>Speciality</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody className='m-2'>
   
{
    doctors.map((doctor ,index)=> <DoctorRow
    
    key={doctor._id}
    doctor={doctor}
    index={index}
    refetch={refetch}
    setDeleteDoctor={setDeleteDoctor}
    ></DoctorRow>)
}
    </tbody>
  </table>
</div>

{ deleteDoctor && <DeleteModal

deleteDoctor={deleteDoctor}
setDeleteDoctor={setDeleteDoctor}
></DeleteModal>}

        </div>
    );
};

export default ManageDoctors;