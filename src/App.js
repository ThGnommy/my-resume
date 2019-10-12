import React from 'react';
import './App.css';
import { Grid, Container } from '@material-ui/core'
import Title from './components/Title/Title'
import Experience from './components/Experience/Experience'
import Certification from './components/Certification/Certification'
import Contacts from './components/Contacts/Contacts'
import Portfolio from './components/Portfolio/Portfolio'


function App() {

  return (
    <div className="App">
      <Grid container direction="row" >
      <Grid container sm={8} xs={12} className="resume">
      <Grid item sm={12} xs={12} >
          <Title name="Thomas Brandoli"/>
        <h1 className="section-title">Formazione</h1>

      <Certification
          job="C# Course"
          where="Udemy"
          year="2017"
          details="klasndknasknjsn jsajssssssssssssssssssssssssssss ssssssssssssssssssssan" />

        <Certification
          job="Build Website from Scratch"
          where="Codecademy"
          year="2017"
          details="klasndknasknjsnjsajsssssssssssss sssssssssssssssssssssssssssssssssssan" />

        <Certification
          job="FMOD Course"
          where="School of Game Audio"
          year="2017"
          details="klasndknasknjsnjsajsssss ssssssssssssssssssssssssss sssssssssssssssssan" />

      </Grid>
        
        <Grid item sm={12} xs={12}>
          <h1 className="section-title">Esperienze</h1>
          <Experience 
            job="Technical Sound Designer"
            year="2017 - 2018"
            details="BELKRLKGNELK RJBFVLEJKBCJKEBHCKJEHVKJEHCVJKE HCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />

          <Experience 
            job="Technical Sound Designer"
            year="2019"
            details="BELKRLKGNELKRJBFVLEJ KBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVC KJEBHVKJBHWKVJBHEKJBVH  " />
        </Grid>

      </Grid>
    
        <Grid container sm={4} direction="column" className="contacts">
          <Contacts />
          <Portfolio />
        </Grid>

      </Grid>
    </div>
  );
}
export default App;

