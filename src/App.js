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
      <Counter/>
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
