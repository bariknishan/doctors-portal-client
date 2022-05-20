import React from 'react';
import { toast } from 'react-toastify';

const DoctorRow = ({ doctor, index,refetch }) => {
    const { name,img, speciality, action,email } = doctor ;


   const handleDelete= email=>{

    fetch(`http://localhost:5000/doctor/${email}`,{
        
        method: 'DELETE',
        headers:{
            authorization: `Bearer ${localStorage.getItem('accessToken')}` 
        }
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        if(data.deletedCount){
            toast.success(`doctor:${name} is deleted`)
            refetch();
        }
    })

   }


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
            <td><button onClick={()=> handleDelete(email)} className="btn btn-warning font-bold">Delet</button></td>
        </tr>
    )
};

export default DoctorRow;