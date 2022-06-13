import React, { Component } from "react";
import PropTypes from "prop-types";
import './Counter.css';


class Counter extends Component {

    constructor() {
        super();   
        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }

    render() {
      return (
        <div className="counter">      
          <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
          <CounterButton by={2} incrementMethod={this.increment} decrementMethod={this.decrement} />
          <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
          <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
          <span className="count">{this.state.counter} Counted</span>
          <div>
            <button className="reset" onClick={this.reset}>Reset</button>
          </div>
        </div>
      );
    }

    reset() {
        this.setState({ counter: 0 });
    }

    increment(by){
        console.log(`increased from child - ${by}`);
        this.setState(
            // Using fat arrow and prevState(good practice) to manage the increment state instead of this.state.counter
            (prevState) => {
            return { counter: prevState.counter + by }
            }
        );
    }

    decrement(by){
        console.log(`increased from child - ${by}`);
        this.setState(
            // Using fat arrow and prevState(good practice) to manage the increment state instead of this.state.counter
            (prevState) => {
            return { counter: prevState.counter - by }
            }
        );
    }
  }

  
class CounterButton extends Component {
    // Setting up state for counter
    // Define the initial state in the constructor
    // state => connter 0;
    constructor() {
        super();    // super method is called before using this.state
        // this.state = {
        //     counter: 0
        // }

        // // Binding (this) in the increment methods
        // // By using the fat arrow in function and redering we don't have to bind (this) 
        // // to the method [it prevents the need to binding]
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    }

    // render = () => { // fat arrow
    render() {
        // const style = {fontSize: "60px"};
        return(
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className="count" 
                    // style={style}
                >{this.state.counter} Counted</span> */}
            </div>
        );
    }

    // increment = () => {  // fat arrow
    // increment(){
    //     // update state here - counter ++
    //     // this.state.counter++; // do not mutate the state directly (bad practice) instead use setState
    //     this.setState(
    //         (prevState) => {
    //             return { counter: prevState.counter + this.props.by }
    //         }
    //     );
    //     // console.log('increased');
    //     this.props.incrementMethod(this.props.by);
    // }

    // decrement(){
    //     this.setState(
    //         (prevState) => {
    //             return { counter: prevState.counter - this.props.by }
    //         }
    //     );
    //     this.props.decrementMethod(this.props.by);
    // }
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