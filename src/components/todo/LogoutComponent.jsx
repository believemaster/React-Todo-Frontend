import React, { Component } from "react";

class LogoutComponent extends Component {
    render() {
        return(
            <div>
                <h1>You're logged out</h1>
                <div className="container">
                    Thankyou for using our web-app
                </div>
            </div>
        );
    }
}

export default LogoutComponent;