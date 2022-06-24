import React, {Component} from "react";
import { Link } from "react-router-dom";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);
    }

    render() {
        return(
            <div>
                <h1>Welcome</h1>
                <div className="container">
                    Welcome <b>{ this.props.match.params.name }</b>. You can manage your <Link to="/todos">todos here</Link>
                </div>
                <div className="container">
                    Click here to get customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
            </div>
        );
    }

    retrieveWelcomeMessage(){
        console.log("Retrieved clicked");
    }

}

export default WelcomeComponent;