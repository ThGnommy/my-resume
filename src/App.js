import React from 'react';
import './reset.css';
import './App.css';
import Title from './components/Title/Title'
import Experience from './components/Experience/Experience'
import Certification from './components/Certification/Certification'
import Contacts from './components/Contacts/Contacts'
import Portfolio from './components/Portfolio/Portfolio'
import styles from './App.css'


function App() {

  return (
    <div className={styles.App}>

      <div className="resume">
        <Title name="Thomas Brandoli"/>

        <h1 className="section-title">Formazione</h1>
        
        <Certification
          job="C# Course"
          where="Udemy"
          year="2017"
          details="klasndknasknjsnjsajssssssssssssssssssssssssssssssssssssssssssssssssan" />

        <Certification
          job="Build Website from Scratch"
          where="Codecademy"
          year="2017"
          details="klasndknasknjsnjsajssssssssssssssssssssssssssssssssssssssssssssssssan" />

        <Certification
          job="FMOD Course"
          where="School of Game Audio"
          year="2017"
          details="klasndknasknjsnjsajssssssssssssssssssssssssssssssssssssssssssssssssan" />


        <h1 className="section-title">Esperienze</h1>

        <Experience 
          job="Technical Sound Designer"
          year="2017 - 2018"
          details="BELKRLKGNELKRJBFVLEJKBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />

        <Experience 
          job="Technical Sound Designer"
          year="2019"
          details="BELKRLKGNELKRJBFVLEJKBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />
      </div>

      <div className={styles.contactsDiv}>
        <Contacts />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
