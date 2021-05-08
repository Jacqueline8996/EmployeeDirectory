import React, { Component } from 'react';
import PageWrapper from "../PageWrapper/PageWrapper";
import Header from "../Header/Header";
import TableBuild from "../TableBuild\TableBuild";


const EmployeeDirect= () => {
    return (
      <div>
        <PageWrapper>
            <Header/>
            <TableBuild/>
        </PageWrapper>
      </div>
    );
  };
  
export default EmployeeDirect;