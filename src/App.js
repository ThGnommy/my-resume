import React from 'react';
import './App.css';
import Title from './components/Title/Title'
import Experience from './components/Experience/Experience'
import Certification from './components/Certification/Certification'
import { Grid } from '@material-ui/core'
import SideBar from './components/SideTab/SideTab'

function App() {



  const codecademy = (
    <div>
        <p>Questo corso di Codecademy, della durata di 10 settimane mi ha dato solide basi di sviluppo web. Imparando HTML, CSS, Javascript e l'utilizzo di Git.</p>
        <p>Il progetto finale del corso:</p><a className="no-white" href="https://thgnommy.github.io/Match-Game/">Match Game</a>
    </div>
  )

  return (
    <div className="App">
      <Grid container spacing={2} direction="row" >
      <Grid item sm={8} xs={12} className="resume">
      <Grid item sm={12} xs={12} >
        <Title name="Thomas Brandoli"/>
        <h1 className="section-title">Formazione</h1>
        <div className="cert-first">
          <Certification
              job="C# Course"
              where="Udemy"
              year="2017"
              details="In questo corso Udemy, ho imparato le basi del linguaggio di programmazione C#." />
        </div>

        <div className="cert-all">
        <Certification
          job="Build Website from Scratch"
          where="Codecademy"
          year="2017"
          details={codecademy} />
        </div>

        <div className="cert-all">
        <Certification
          job="FMOD Course"
          where="School of Game Audio"
          year="2017"
          details="Ho imparato il middlewere " />
        </div>


      </Grid>

        <Grid item sm={12} xs={12}>
          <h1 className="section-title">Esperienze</h1>
          <div className="exp-first">
          <Experience
            job="Technical Sound Designer"
            where="Codev Games"
            year="2017 - 2018"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          </div>

          <div className="exp-all">
          <Experience
            job="Technical Sound Designer"
            where="Tiz Developers"
            year="2018  - Present"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
          </div>

          <div className="exp-all">
          <Experience
            job="Web Developer"
            where="Web & More"
            year="2019 - Present"
            details="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
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

