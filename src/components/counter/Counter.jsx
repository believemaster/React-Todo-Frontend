import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
    // Setting up state for counter
    // Define the initial state in the constructor
    // state => connter 0;
    constructor() {
        super();    // super method is called before using this.state
        this.state = {
            counter: 0
        }

        // Binding (this) in the increment methods
        this.increment = this.increment.bind(this)
    }

    render() {
        return(
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <span className="count">{this.state.counter} Counted</span>
            </div>
        );
    }

    increment() {
        // update state here - counter ++
        // this.state.counter++; // do not mutate the state directly (bad practice) instead use setState
        this.setState({
            counter: this.state.counter + 1
        });
        console.log('increased');
    }
}

// Can be called this way if function based component but class based components are easy for states
// This function call is simple but if the function is defined locally like it is done above then 
// the call is with the help of this.functionName
// only instance is passed like this=> onClick={instance} and not involked [onClick={function()} don't do it]

// function increment() {
//     console.log('increased');
// }

export default Counter;