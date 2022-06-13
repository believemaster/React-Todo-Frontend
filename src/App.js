import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import FirstComponent from '../src/components/learning-examples/FirstComponent';
import SecondComponent, { ThirdComponent } from '../src/components/learning-examples/SecondAndThirdComponent';
import Counter from './components/counter/Counter';

// React Function Component
function App() {
  return (
    <div className="App">      
      {/* <LearningComponents/> uncomment if want to test */}
      {/* *********************************************** */}
      {/* Indivisual counter with indivisual state (using props) | props are like data-x in html */}
      {/* <Counter by="2" /> this will give error in console as propType is checked in jsx*/}
      {/* <CounterButton by={2} />
      <CounterButton by={5} />
      <CounterButton by={10} /> */}
      {/* *********************************************** */}
      <Counter />
    </div>
  );
}

class LearningComponents extends Component {
  render() {
    return(
      // Components must be wrappedn inside divs
      // All HTML elements in JSX should be in small letters
      <div className='LearningComponents'>
        This is APP component which is created using a function component
        <FirstComponent/>
        <SecondComponent/>
        <ThirdComponent/>
      </div>
    );
  }
}

export default App;
