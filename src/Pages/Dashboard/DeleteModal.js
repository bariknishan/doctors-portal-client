import React from 'react';
import { toast } from 'react-toastify';

const DeleteModal = ({deleteDoctor ,refetch,setDeleteDoctor}) => {
    const {name,email}= deleteDoctor ;

    const handleDelete= ()=>{

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
                setDeleteDoctor(null)
                refetch();
            }
        })
    
       }

    return (
        <div>

           

            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-yellow-500 font-bold"> Sure About Delete {name}?</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">

                    <button onClick={()=> handleDelete(email)} className="btn btn-warning font-bold">Delete</button>
                        <label for="delete-confirm-modal" className="btn">cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;