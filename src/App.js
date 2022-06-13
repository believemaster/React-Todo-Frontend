import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

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

// React Class Component - Useful for changing states in react
class FirstComponent extends Component {
  render() {
    return (
      <div className="AppClassComp1">
        This is FirstComponent which is created using a class component.
      </div>
    );
  }
}

// React Class Component
class SecondComponent extends Component {
  render() {
    return (
      <div className="AppClassComp2">
        Every component which is created is included in the app component.
      </div>
    );
  }
}

// React Function Componetn
function ThirdComponent() {
  return (
    <div className="AppClassComp3">
      This is 3rd component which is using funciton component and is simpler than class component.
    </div>
  );
}

export default App;
