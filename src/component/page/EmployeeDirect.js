import React, { Component } from 'react';
import PageWrapper from "../PageWrapper/PageWrapper";
import HeaderBar from "../HeaderBar/HeaderBar";
import TableBuild from "../TableBuild/TableBuild";



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