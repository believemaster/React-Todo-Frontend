import React, {Component} from "react";
import { BrowserRouter as Router, 
    Link,
  } from "react-router-dom";

class WelcomeComponent extends Component {
    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome <b>{ this.props.match.params.name }</b>. You can manage your <Link to="/todos">todos here</Link>
                </div>
            </div>
        );
    }
}

export default WelcomeComponent;