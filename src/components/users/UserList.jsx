import React from 'react'

export const UserList = ({data}) => {
    const {
        id,
        name,
        username,
        email,
        address: {
            street,
            city,
            zipcode,
        },
        phone,
        website,
        company: {
            name: companyname
        }

    } = data;
  return (
        <tbody>
         <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{username}</td>
            <td>{email}</td>
            <td>{street}</td>
            <td>{city}</td>
            <td>{zipcode}</td>
            <td>{phone}</td>
            <td>{website}</td>
            <td>{companyname}</td>
           </tr>
        </tbody>
       
  )
}
