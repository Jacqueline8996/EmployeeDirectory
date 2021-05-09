import React from 'react';
// import Table from 'react-bootstrap/Table'


function TableRow({ key,src, first, last, age, phone, email }) {
    return(
      <tbody>
          <tr className={key}>
          <td><img src={src} alt={`${first} ${last} picture`} className="profilePic"></img></td>
          <td>{first}</td>
          <td>{last}</td>
          <td>{age}</td>
          <td>{phone}</td>
          <td>{email}</td>
          </tr>
      </tbody>
            
    )    
};
  
export default TableRow;