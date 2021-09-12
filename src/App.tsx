import React from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import InterestList from './components/InterestList';

function App() {
  let message : string = `My portfolio. 
   A showcase of the projects I've worked on`

  return (
    <div className="App">
      <div className="mainContainer">
        <Title
          message={message} />
      </div>

      <div className="mainContainer">
        <Title
          message="I'm interested in..." />
        <InterestList />
      </div>

      <div className="mainContainer">
        <Title
          message="3rd." />
      </div>

      <div className="mainContainer">
        <Title
          message="4th." />
      </div>
      
      
    </div>
  );
}

export default App;
