import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
    render() {
        return(
            <div className="counter">
                <button onClick={increment}>+1</button>
                <span className="count">0 Counted</span>
            </div>
        );
    }
}

function increment() {
    console.log('increased');
}

export default Counter;