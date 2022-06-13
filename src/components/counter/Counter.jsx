import React, { Component } from "react";
import './Counter.css';

class Counter extends Component {
    render() {
        return(
            <div className="counter">
                <button>+1</button>
                <span className="count">0 Counted</span>
            </div>
        );
    }
}

export default Counter;