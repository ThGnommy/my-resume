import React from 'react';
import './App.css';
import Title from './components/Title/Title'
import Experience from './components/Experience/Experience'
import Certification from './components/Certification/Certification'
import { Grid } from '@material-ui/core'
import SideBar from './components/SideTab/SideTab'

function App() {
  return (
    <div className="App">
      <Grid container spacing={6} direction="row" >
      <Grid item sm={8} xs={12} className="resume">
      <Grid item sm={12} xs={12} >
        <Title name="Thomas Brandoli"/>
        <h1 className="section-title">Formazione</h1>
        <div className="cert-first">
          <Certification
              job="C# Course"
              where="Udemy"
              year="2017"
              details="klasndknasknjsn jsajssssssssssssssssssssssssssss ssssssssssssssssssssan" />
        </div>

        <div className="cert-all">
        <Certification
          job="Build Website from Scratch"
          where="Codecademy"
          year="2017"
          details="klasndknasknjsnjsajsssssssssssss sssssssssssssssssssssssssssssssssssan" />
        </div>

        <div className="cert-all">
        <Certification
          job="FMOD Course"
          where="School of Game Audio"
          year="2017"
          details="klasndknasknjsnjsajsssss ssssssssssssssssssssssssss sssssssssssssssssan" />
        </div>


      </Grid>

        <Grid item sm={12} xs={12}>
          <h1 className="section-title">Esperienze</h1>
          <div className="exp-first">
          <Experience
            job="Technical Sound Designer"
            year="2017 - 2018"
            details="BELKRLKGNELK RJBFVLEJKBCJKEBHCKJEHVKJEHCVJKE HCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />
          </div>
          <div className="exp-all">
          <Experience
            job="Technical Sound Designer"
            year="2019"
            details="BELKRLKGNELKRJBFVLEJ KBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVC KJEBHVKJBHWKVJBHEKJBVH  " />
          </div>
        </Grid>

      </Grid>

        <Grid item sm={4} xs={12}className="contacts">
        <SideBar></SideBar>
        </Grid>
      </Grid>
    </div>
  );
}
export default App;

