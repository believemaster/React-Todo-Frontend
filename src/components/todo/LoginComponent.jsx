import React, { Component } from "react";
import "./Todo.css";
import AuthenticationService from "./AuthenticationService.js";

class LoginComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "secret",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }

        // this.handleUsernameChange = this.handleUsernameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        // console.log(this.state);
        // console.log(event.target.name);
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    // handleUsernameChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         username: event.target.value
    //     });
    // }

    // handlePasswordChange(event) {
    //     console.log(event.target.value);
    //     this.setState({
    //         password: event.target.value
    //     });
    // }

    loginClicked() {
        if(this.state.username === "secret" && this.state.password === "secret") {
            console.log(this.state);
            // console.log("Login Success");
            AuthenticationService.registerSuccessfulLogin(this.state.username, this.state.password);
            this.props.history.push(`/welcome/${this.state.username}`);
            // this.setState({showSuccessMessage: true})
            // this.setState({hasLoginFailed: false})
        } else {
            console.log(this.state);
            console.log("Login Failed");
            this.setState({showSuccessMessage: false})
            this.setState({hasLoginFailed: true})
        }
    }

    render() {
        return(
            <div>
                <div className="card">
                    <div className="card-header">
                        <h1>Login</h1>  
                    </div>
                    <div className="card-body">
                        Username: <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                        <br />
                        Password: <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                        <br />
                        <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                        
                        {/* use anytype of code second way is simpler as: true && "string" returns string and when false then returns false */}
                        {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                        { this.state.hasLoginFailed && <div className="alert alert-warning invalid">Invalid Credentials</div> }
                        {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage} /> */}
                        {/* { this.state.showSuccessMessage && <div className="valid">Login Successful</div> } */}
                    </div>
                </div>
            </div>
        );
    }

}

// function ShowInvalidCredentials(props) {
//         if(props.hasLoginFailed) {
//             return <div className="invalid">Invalid Credentials</div>
//         } 
//         return null
// }

// function ShowLoginSuccess(props) {
//     if(props.showSuccessMessage) {
//         return <div className="valid">Login Successful</div>
//     } 
//     return null
// }

export default LoginComponent;