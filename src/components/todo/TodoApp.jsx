import React, { Component } from "react";
import { BrowserRouter as Router, 
         Route,
         Switch
       } from "react-router-dom";
import "./Todo.css";

// const history = createBrowserHistory();

class TodoApp extends Component {
    render() {
        
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={ LoginComponent } />
                            <Route path="/login" component={ LoginComponent } />
                            <Route path="/welcome/:name" component={ WelcomeComponent } />
                            <Route path="/todos" component={ ListTodosComponent } />
                            <Route path="" component={ ErrorComponent } />
                        </Switch>
                    </>
                </Router>

                {/* <LoginComponent />
                <WelcomeComponent /> */}
        
            </div>
        );
    }
}

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : 
            [
                { id: 1, description: "Learn React" },
                { id: 2, description: "Learn Springboot" },
                { id: 3, description: "Learn Vue" },
                { id: 4, description: "Learn Laravel" },
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                <tr>
                                    <td>{ todo.id }</td>
                                    <td>{ todo.description }</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return(
            <div>
                Welcome { this.props.match.params.name }
            </div>
        );
    }
}

function ErrorComponent() {
    return(
        <div>
            <h3>Error 404</h3>
            <p>Sorry, it seems the issue with the URL or some other error. Contact admin support.</p>
        </div>
    );
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
            console.log("Login Success");
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
                Username: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                <br />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <br />
                <button onClick={this.loginClicked}>Login</button>
                
                {/* use anytype of code second way is simpler as: true && "string" returns string and when false then returns false */}
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                { this.state.hasLoginFailed && <div className="invalid">Invalid Credentials</div> }
                {/* <ShowLoginSuccess showSuccessMessage={this.state.showSuccessMessage} /> */}
                { this.state.showSuccessMessage && <div className="valid">Login Successful</div> }
                
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


export default TodoApp;