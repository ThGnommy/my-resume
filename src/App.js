import React from 'react';
import './reset.css';
import './App.css';
import Title from './components/Title/Title'
// import About from './components/About Me/About'
import Experience from './components/Experience/Experience'

function App() {
  return (
    <div className="App">
      <Title name="Thomas Brandoli"/>
      <h1 class="section-title">Esperienze</h1>
      <Experience 
        job="Job"
        year="2019"
        details="BELKRLKGNELKRJBFVLEJKBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />

      <Experience 
        job="Job"
        year="2019"
        details="BELKRLKGNELKRJBFVLEJKBCJKEBHCKJEHVKJEHCVJKEHCVKJEBHVCKJEBHVKJBHWKVJBHEKJBVH  " />




    </div>
  );
}

export default App;
