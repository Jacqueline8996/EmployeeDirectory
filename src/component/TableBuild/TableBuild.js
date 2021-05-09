import React, { Component } from 'react';
// import API from "../../utils/API.js";
import Table from 'react-bootstrap/Table';
// import HeaderBar from "../HeaderBar/HeaderBar";

import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";
class TableBuild extends Component {
    state = {
        employees: [],
        filteredEmployees: [],
        search: "",
    }

    // componentDidMount() {
    //   // Make A Request for that Data (from the API)
    //   API.getEmployees().then((res) => {
    //     console.log(res);
    //     const mapEmployees = res.data.results.map((person) => {
    //         return {
    //             id: person.id.value,
    //             src: person.picture.thumbnail,
    //             first: person.name.first,
    //             last:person.name.last,
    //             age: person.dob.age,
    //             phone: person.phone,
    //             email:person.email
    //         }
    //     });
//         // Once we have the data --> Update our STATE 
//         this.setState({ employees: mapEmployees });
//         this.setState({ ...this.state, filteredEmployees: this.state.employees })
//     })
//       .catch(err => {
//           console.log(err);
//       })
//   }

//   filterList = e => {
//     const filterTarget = e.target.value;
//     let employeeList = this.state.employees;
//     employeeList = employeeList.filter(i => {
//         let values = Object.values(i)
//             .join("")
//             .toLocaleLowerCase();
//         return values.indexOf(filterTarget.toLowerCase()) !== -1;
//     })
//     this.setState({ filteredEmployees: employeeList });
//     }
    render(){
        return(
            <div>
            
            <Table responsive>
            <TableHeader/>
                <TableRow>
                    <td>ghost</td>
                    <td>ghostName </td>
                    <td>ghostlastName</td>
                    <td>150</td>
                    <td>12345</td>
                    <td>12345@ghost6.com</td>
                </TableRow>
              
            {/* {       
            this.state.filteredEmployees[0] ?

                this.state.filteredEmployees.map(person => (
                    <tr>
                        <td><img src={person.pic} className="thumbnail" alt="thumbnail" /></td>
                        <td>{person.first}</td>
                        <td>{person.last}</td>
                        <td>{person.age}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                    </tr>
                ))
                :
                this.state.employees.map([person] => (
                    <tr>
                        <td><img src={person.pic} className="thumbnail" alt="thumbnail" /></td>
                        <td>{person.first}</td>
                        <td>{person.last}</td>
                        <td>{person.age}</td>
                        <td>{person.phone}</td>
                        <td>{person.email}</td>
                    </tr>
                ))
            } */}
            </Table>
        </div>
        )
    }

    
};
  
export default TableBuild;