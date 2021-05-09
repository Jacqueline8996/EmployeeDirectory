import React, { Component } from 'react';
import PageWrapper from "../PageWrapper/PageWrapper";
import TableBuild from "../TableBuild/TableBuild";
import HeaderBar from "../HeaderBar/HeaderBar";


const EmployeeDirect= () => {
    return (
      <div>
        <PageWrapper>
          <HeaderBar/>
          <TableBuild/>
        </PageWrapper>
      </div>
    );
  };
  
export default EmployeeDirect;