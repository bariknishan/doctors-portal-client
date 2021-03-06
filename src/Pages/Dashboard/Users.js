import React from 'react';
import { useQuery } from 'react-query';
import Loadind from '../SharedPage/Loadind';
import UserRow from './UserRow';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://safe-dusk-06210.herokuapp.com/user', {


        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`

        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loadind></Loadind>
    }

    
    return (
        <div>
            <h2 className='text-2xl'>All Users:{users.length} </h2>

            <div className="overflow-x-auto m-4 mt-4">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow

                                key={user._id}
                                user={user}
                                refetch={refetch}
                            ></UserRow>)
                        }
                    </tbody>
                </table>
            </div>


        </div>
    );
};

export default Users;