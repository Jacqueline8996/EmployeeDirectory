import{ Component } from 'react';
// import Table from 'react-bootstrap/Table'


class TableHeader extends Component {
   
    render(){
        return(
            <thead>
              <tr>
                <th>Profile Picture</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th>Phone #</th>
                <th>Email </th>
              </tr>
            </thead>
        )
    }

    
};
  
export default TableHeader;