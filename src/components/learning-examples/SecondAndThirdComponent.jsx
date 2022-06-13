import React, { Component } from "react";

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
export default SecondComponent;
  
  // React Function Componetn
export function ThirdComponent() {
    return (
      <div className="AppClassComp3">
        This is 3rd component which is using funciton component and is simpler than class component.
      </div>
    );
  }

  
// Here in this component the SecondComponent is a default export component and the ThirdComponent
// is optional component while we import into the App
// default is imported directly [import SecondComponent from './file'] while normal export witin curly braces [import {ThirdComponent} from './file']