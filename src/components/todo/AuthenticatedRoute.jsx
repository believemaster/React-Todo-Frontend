import React, { Component } from "react";
import { Redirect, Route } from "react-router-dom";
import AuthenticationService from "./AuthenticationService.js";

class AuthenticatedRoute extends Component {
    render() {
       if(AuthenticationService.isUserLoggedIn()) {
        return <Route {...this.props} />       // using ... (spread operator) we pass the exact amount of parameters(in this cases props) as are available
       } else {
        return <Redirect to="/login" />
       }
    }
}

export default AuthenticatedRoute;