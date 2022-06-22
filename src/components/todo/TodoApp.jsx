import React, { Component } from "react";
import { BrowserRouter as Router, 
         Link, 
         Route,
         Switch
       } from "react-router-dom";
import "./Todo.css";
import AuthenticationService from "./AuthenticationService.js";

// const history = createBrowserHistory();

class TodoApp extends Component {
    render() {
        
        return(
            <div className="TodoApp">
                <Router>
                    <>
                        <HeaderComponent />
                        <Switch>
                            <Route path="/" exact component={ LoginComponent } />
                            <Route path="/login" component={ LoginComponent } />
                            <Route path="/welcome/:name" component={ WelcomeComponent } />
                            <Route path="/todos" component={ ListTodosComponent } />
                            <Route path="/logout" component={ LogoutComponent } />
                            <Route path="" component={ ErrorComponent } />
                        </Switch>
                        <FooterComponent/>
                    </>
                </Router>

                {/* <LoginComponent />
                <WelcomeComponent /> */}
        
            </div>
        );
    }
}

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        console.log("is user logged in " + isUserLoggedIn);

        return(
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><Link to="/" className="navbar-brand">Todo Yanik</Link></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/secret">Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos">Todos</Link></li>}
                    </ul> 
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        );
    }
}

class FooterComponent extends Component {
    render() {
        return(
            <footer className="footer">
                <span className="text-muted">All rights reserved 2022 @yanikkumar</span>
            </footer>
        );
    }
}

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

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : 
            [
                { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                { id: 2, description: "Learn Springboot", done: false, targetDate: new Date() },
                { id: 3, description: "Learn Vue", done: false, targetDate: new Date() },
                { id: 4, description: "Learn Laravel", done: false, targetDate: new Date() },
            ]
        }
    }

    render() {
        return(
            <div>
                <h1>List Todos</h1>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    (todo) => 
                                    <tr key={todo.id}>
                                        <td>{ todo.id }</td>
                                        <td>{ todo.description }</td>
                                        <td>{ todo.done.toString() }</td>
                                        <td>{ todo.targetDate.toString() }</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

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


export default TodoApp;