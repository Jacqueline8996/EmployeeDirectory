import React, { Component } from 'react';
import PageWrapper from "../PageWrapper/PageWrapper";
import TableBuild from "../TableBuild/TableBuild";
import Table from 'react-bootstrap/Table';
import HeaderBar from "../HeaderBar/HeaderBar";


const EmployeeDirect= () => {
    return (
      <div>
        <PageWrapper>
          <TableBuild/>
        </PageWrapper>
      </div>
    );
  };
  
export default EmployeeDirect;