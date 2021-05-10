import React from 'react';
import "./TableRow.css"


function TableRow({ key,src, first, last, age, phone, email }) {
    return(
      <tbody>
          <tr className={key}>
          <td><img src={src} alt={`${first} ${last} pic`} className="profilePic" alt ={`${first} ${last}`}/></td>
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