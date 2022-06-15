import React, { Component } from "react";
import "./Todo.css";

class TodoApp extends Component {
    render() {
        return(
            <div className="TodoApp">
                <LoginComponent />
            </div>
        );
    }
}

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
        this.login = this.login.bind(this);
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

    login() {
        if(this.state.username === "secret" && this.state.password === "secret") {
            console.log(this.state);
            console.log("Login Success");
            this.setState({showSuccessMessage: true})
            this.setState({hasLoginFailed: false})
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
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                <br />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br />
                <button onClick={this.login}>Login</button>
                
                <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} />
                <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage} />
                
            </div>
        );
    }

}

function ShowInvalidCredentials(props) {
        if(props.hasLoginFailed) {
            return <div className="invalid">Invalid Credentials</div>

        } 
        return null
}

function ShowLoginSuccess(props) {
    if(props.showSuccessMessage) {
        return <div className="valid">Login Successful</div>
    } 
    return null
}


export default TodoApp;