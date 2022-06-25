import React from 'react'
import { UserList } from './UserList'
import errorImage from '../../assets/images/error.png'
import './userlist.css';

export const Users = ({userdata, status}) => {
  if(status === 'loading' || status === null){
    return <div className='loader'></div>
}
else if(status === 'failed'){
  return (
       <div className='failed__message'>
           <div className='error__image'>
               <img src={errorImage} alt="Error" />
           </div>
           There was an error while fetching the data
           </div>
  )
}
else
{
  return (
    <div className='load__users'>
        <table className='userlist'>
            <thead>
             <tr>
                <th>Id</th>
                <th>Name</th>
                <th>username</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Zip</th>
                <th>Phone</th>
                <th>Website</th>
                <th>company</th>
              </tr>
            </thead>
            {userdata.map((user) => 
                <UserList key={user.id} data={user} />
            )}
         </table>
    </div>
  )
}
}
