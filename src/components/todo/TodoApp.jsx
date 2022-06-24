import React, { Component } from "react";
import { BrowserRouter as Router,
         Route,
         Switch
       } from "react-router-dom";
import "./Todo.css";
import AuthenticatedRoute from "./AuthenticatedRoute";
import LoginComponent from "./LoginComponent";
import ListTodosComponent from "./ListTodosComponent";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";
import ErrorComponent from "./ErrorComponent";
import LogoutComponent from "./LogoutComponent";
import WelcomeComponent from "./WelcomeCompnent";

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
                            <AuthenticatedRoute path="/welcome/:name" component={ WelcomeComponent } />
                            <AuthenticatedRoute path="/todos" component={ ListTodosComponent } />
                            <AuthenticatedRoute path="/logout" component={ LogoutComponent } />
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

export default TodoApp;