import React from 'react';
import { format } from 'date-fns/esm';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';


const BookingModal = ({ treatment, date,setTreatment ,refetch }) => {
    const {_id, name, slots } = treatment;


    const formatedDate= format(date, 'PP')
    const handleBooking =event=>{
      event.preventDefault();
      const slot= event.target.slot.value;
      console.log(name, _id,slot)


const booking={


    treatementId:_id,
    treatment:name,
    date:formatedDate,
    slot,
    patient: user.email,
    patientName: user.displayName
}

fetch('http://localhost:5000/booking',{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(booking)
})
.then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.success){
        toast(`appoinment is saved, ${formatedDate} at${slot}`)
    }

    else{
        toast.error(`appoinment is boked on , ${data.booking?.date} at${data.booking?.slot}`)
    }
    refetch();
    setTreatment(null); // close modal
})



    
  }


  const [user, loading, error] = useAuthState(auth);

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Booking for: {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 justify-items-center mt-4'>
                        <input type="text" value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot ,index) =>
                                    
                                    <option
                                     key={index}  
                                     value={slot}>
                                         
                                   {slot}</option>)
                            }

                        </select>
                        <input type="text"  disabled value={user?.displayName || ''} name='name' placeholder="Name" className="input input-bordered w-full max-w-xs" />
                        <input type="email"name='email' disabled value={user?.email || ''} placeholder="Email" className="input input-bordered w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="phone Number" className="input input-bordered w-full max-w-xs" />
                        <input type="submit" value="submit " placeholder="Type here" className=" btn btn-secondary w-full max-w-xs" />

                    </form>

                </div>
            </div>

        </div>


    );
};

export default BookingModal;