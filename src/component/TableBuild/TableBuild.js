import React, { Component } from 'react';
// import API from "../../utils/API";
// import { render } from 'react-dom';
import API from "../../utils/API.js";
// import './style.css';
import Table from 'react-bootstrap/Table';
import HeaderBar from "../HeaderBar/HeaderBar";


class TableBuild extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
      // Make A Request for that Data (from the API)
      API.getEmployees().then((res) => {
        console.log(res);
        const mapEmployees = res.data.results.map((person) => {
            return {
                id: person.id.value,
                src: person.picture.thumbnail,
                first: person.name.first,
                last:person.name.last,
                age: person.dob.age,
                phone: person.phone,
                email:person.email
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

  
    render(){
        return(
            <Table responsive>
            <HeaderBar/>
            <tbody>
            {
              this.state.employees.map(person => (
                  <tr>
                      <td><img src={person.src} className="profilePic" alt="profilePic" /></td>
                      <td>{person.first}</td>
                      <td>{person.last}</td>
                      <td>{person.age}</td>
                      <td>{person.phone}</td>
                      <td>{person.email}</td>
                  </tr>
              ))
            }
            </tbody>

          </Table>
                
        )
    }

    
};
  
export default TableBuild;