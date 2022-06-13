import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from '../src/components/learning-examples/FirstComponent';
import SecondComponent, { ThirdComponent } from '../src/components/learning-examples/SecondAndThirdComponent';

// React Function Component
function App() {
  return (
    <div className="App">
      This is APP component which is created using a function component
      <FirstComponent/>
      <SecondComponent/>
      <ThirdComponent/>
    </div>
  );
}

export default App;
