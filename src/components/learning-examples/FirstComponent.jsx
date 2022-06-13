import React, { Component } from "react";

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

export default FirstComponent;

// To use the Component in App we need to export the Component.
// Export default is used to export the major Component inside the Component.
// export without default becomes optional component to export. (Check SecondAndThridComponent)
// Class based component can be exported directly like export class XComponent or separately as 
// shown above. Code inside the return() is all JSX