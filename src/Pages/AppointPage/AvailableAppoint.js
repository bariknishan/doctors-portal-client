import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import Loadind from '../SharedPage/Loadind';
import BookingModal from './BookingModal';
import Service from './Service';


const AvailableAppoint = ({ date }) => {
     const formattedDate= format(date, 'PP')
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)

    const {data:services ,isLoading ,refetch}=useQuery(['available', formattedDate],() =>  fetch(`https://safe-dusk-06210.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json()) )


            if(isLoading){
                return <Loadind></Loadind>
            }
    // useEffect(() => {

    //     fetch(`https://safe-dusk-06210.herokuapp.com/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))

    // }, [formattedDate])
    return (
        <div>
            <h1 className='text-center text-xl text-primary font-bold mt-4'>Available Appointment On:{format(date, 'PP')}</h1>

            <div className=' grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 m-4 mt-16'>
                {
                    services?.map(service => <Service
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    ></Service>)
                }
            </div>
            {treatment && <BookingModal date={date} treatment={treatment} refetch={refetch} setTreatment={setTreatment} ></BookingModal>}
        </div>
    );
};

export default AvailableAppoint;