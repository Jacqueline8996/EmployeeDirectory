import React, { Component } from 'react';
import API from "../../utils/API.js";
import Table from 'react-bootstrap/Table';
// import HeaderBar from "../HeaderBar/HeaderBar";
import TableHeader from "../TableHeader/TableHeader";
import TableRow from "../TableRow/TableRow";


class TableBuild extends Component {
    state = {
        employees: [],
        filteredEmployees: [],
        search: "",
        index: 0,
    }

   
    componentDidMount() {
        
        // Make A Request for that Data (from the API)
        
        API.getEmployee().then((res) => {
            console.log(res);
            const mapEmployees = res.data.results.map((emp) => {
                return {
                    id: emp.id.value,
                    src: emp.picture.thumbnail,
                    first: emp.name.first,
                    last: emp.name.last,
                    age: emp.dob.age,
                    phone: emp.phone,
                    email: emp.email,
                }
            });
            // Once we have the data --> Update our STATE 
            this.setState({ employees: mapEmployees });
            this.setState({ ...this.state, filteredEmployees: this.state.employees })
        })
            .catch(err => {
                console.log(err);
            })
    

    }


    filterList = e => {
        const filterTarget = e.target.value;
        let employeeList = this.state.employees;
        employeeList = employeeList.filter(i => {
            let values = Object.values(i)
                .join("")
                .toLocaleLowerCase();
            return values.indexOf(filterTarget.toLowerCase()) !== -1;
        })
        this.setState({ filteredEmployees: employeeList });
    }

    render() {
        return (
            <div className="filter-list">
                <input className="search" type="text" placeholder='Search directory for Employee' onChange={this.filterList} />
                <body>
                    <h1></h1>
                    <div className="employee-list">
                        <Table>
                            <TableHeader/>
                            {
                                this.state.filteredEmployees[0] ?

                                    this.state.filteredEmployees.map((person,index) => (
                                        <TableRow
                                            key={index}
                                            src={person.src}
                                            first={person.first}
                                            last={person.last}
                                            age={person.age}
                                            phone={person.phone}
                                            email={person.email}
                                        />
                                    ))
                                    :
                                    this.state.employees.map((person,index) => (
                                        <TableRow
                                            key={index}
                                            src={person.src}
                                            first={person.first}
                                            last={person.last}
                                            age={person.age}
                                            phone={person.phone}
                                            email={person.email}
                                        />
                                    ))
                            }
                        
                        </Table>
                    </div>
                </body>
            </div>
        )
    }
}


  
export default TableBuild;