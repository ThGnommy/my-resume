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

  const codevGames = (
    <div>
      <p>
        Ho collaborato con questo team indie per lo sviluppo dell'fps <strong>Pylow</strong>, sviluppato in Unity.
        Il mio lavoro è stato quello di creare tutti i suoni del gioco, e di implementarli nel middleware FMOD.
      </p>
      <p>Qui il trailer realizzato da me, mi sono occupato sia del montaggio video che del sound design:</p>
      <a className="a-black" href="https://youtu.be/aNkXOA64DmY" target="_blank" rel="noopener noreferrer">Trailer</a>
    </div>
  )

  const tizDevelopers = (
    <div>
      <p>
        Attutalmente collaboro con questo team indie. Stiamo sviluppando un videogioco horror chiamato<br></br>
        <strong> Seven: Inheritance of the Evil One</strong></p>
        <p>Il game engine che utilizziamo è Unreal Engine 4.
        Personalmente mi occupo del lato audio a 360°. Dalla creazione dei suoni, all'implementazione dell'audio utilizzando FMOD
        e il linguaggio di visual scripting Blueprint.</p>
      <p>Questo il trailer realizzato da me per la Milan Games Week 2019. Mi sono occupato sia del montaggio video che del sound design:</p>
      <a className="a-black" href="https://youtu.be/Q3pw_QAYj1M" target="_blank" rel="noopener noreferrer">Trailer</a>
    </div>
  )

  const webAndMore = (
    <div>
      <p>Sviluppo e mantenimento di siti web in Wordpress, utilizzando il framework Genesis.</p>
      <p>Sviluppo di applicazioni utilizzando la libreria Javascript React.</p>
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
              details="In questo corso Udemy, ho imparato le basi del linguaggio di programmazione C# in ambiente .NET" />
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
          details="Attraverso questo percorso, ho imparato ad utilizzare il middleware audio FMOD Studio
          implementandolo in CUBE Engine, e ricreando tutti i suoni del gioco CUBE." />
        </div>

      </Grid>

        <Grid item sm={12} xs={12}>
          <h1 className="section-title">Esperienze</h1>
          <div className="exp-first">
          <Experience
            job="Technical Sound Designer"
            where="Codev Games"
            year="2017 - 2018"
            details={codevGames} />
          </div>

          <div className="exp-all">
          <Experience
            job="Technical Sound Designer"
            where="Tiz Developers"
            year="2018  - Present"
            details={tizDevelopers} />
          </div>

          <div className="exp-all">
          <Experience
            job="Web Developer"
            where="Web & More"
            year="2019 - Present"
            details={webAndMore}/>
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

