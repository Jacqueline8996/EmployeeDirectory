import React from 'react';
import PageWrapper from "../component/PageWrapper/PageWrapper";
import TableBuild from "../component/TableBuild/TableBuild";
import HeaderBar from "../component/HeaderBar/HeaderBar";
import "./EmployeeDirect.css"


const EmployeeDirect= () => {
    return (
      <div className="container">
        <PageWrapper>
          <HeaderBar/>
          <TableBuild/>
        </PageWrapper>
      </div>
    );
  };
  
export default EmployeeDirect;