import React, { Component } from "react";
import PropTypes from "prop-types";
import './Counter.css';


class Counter extends Component {
    render() {
      return (
        <div className="counter">      
          <CounterButton />
          <CounterButton by={2} />
          <CounterButton by={5} />
          <CounterButton by={10} />
        </div>
      );
    }
  }

  
class CounterButton extends Component {
    // Setting up state for counter
    // Define the initial state in the constructor
    // state => connter 0;
    constructor() {
        super();    // super method is called before using this.state
        this.state = {
            counter: 0
        }

        // Binding (this) in the increment methods
        // By using the fat arrow in function and redering we don't have to bind (this) 
        // to the method [it prevents the need to binding]
        this.increment = this.increment.bind(this)
    }

    // render = () => { // fat arrow
    render() {
        // const style = {fontSize: "60px"};
        return(
            <div className="counter">
                <button onClick={this.increment}>+{this.props.by}</button>
                <span className="count" 
                    // style={style}
                >{this.state.counter} Counted</span>
            </div>
        );
    }

    // increment = () => {  // fat arrow
    increment(){
        // update state here - counter ++
        // this.state.counter++; // do not mutate the state directly (bad practice) instead use setState
        this.setState({
            counter: this.state.counter + this.props.by
        });
        console.log('increased');
    }
}

// Defining default property of component so if not by was provided in component it will be 1 byDefault
CounterButton.defaultProps = {
    by: 1
}

// Defining propTypes for the component to check the prop type if not number then throw error in console
CounterButton.propTypes = {
    by: PropTypes.number
}

// Can be called this way if function based component but class based components are easy for states
// This function call is simple but if the function is defined locally like it is done above then 
// the call is with the help of this.functionName
// only instance is passed like this=> onClick={instance} and not involked [onClick={function()} don't do it]

// function increment() {
//     console.log('increased');
// }

export default Counter;