import React from 'react';


const DoctorRow = ({ doctor, index,refetch,setDeleteDoctor }) => {

    const { name,img, speciality, email } = doctor ;


  


    return (

        <tr  className=''>
            <th>{index + 1}</th>

            <td><div class="avatar">
                <div class="w-20 rounded">
                    <img src={img} alt="name"   />
                </div>
                </div>
                </td>



            <td>{name}</td>
            <td>{speciality}</td>


            <td>
            <label  onClick={()=> setDeleteDoctor(doctor)} for="delete-confirm-modal" className="btn btn-warning m-2 p-4 font-bold ">Delete</label>

              
            </td>
        </tr>
    )
};

export default DoctorRow;