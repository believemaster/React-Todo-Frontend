import React, { Component } from "react";
import "./Todo.css";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        console.log("LifeCycle of react: Inside Constructor");
        this.state = {
            todos : [],
            message: null
        }
        
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    }

    // Best practice in react is : when calling api don't call api in constructor because state is not initialized until api is called completely, therefore empty the state


    // React lifecycle method called before render i.e. call api in component did mount instead of constructor
    componentDidMount() {
        console.log("LifeCycle of react: Inside Component Did Mount");

        this.refreshTodos();
    }

    refreshTodos() {
        let username = AuthenticationService.getLoggedInUserName;
        TodoDataService.retrieveAllTodos(username)
        .then(
            response => {
                console.log(response);
                this.setState({
                    todos: response.data
                })
            }
        )
        .catch()
    }

    // Another lifecycle methods
    componentWillUnmount() {
        console.log("LifeCycle of react: Inside Component Did Unmount");
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("LifeCycle of react: Inside Should Component Update");
        console.log(nextProps);
        console.log(nextState);
        return true; // if true then data will update but if false date will come but not shown (i.e. render is not called) i.e. we don't directly update state
    }

    // Delete Todo
    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName();
        console.log('id: ' +id+ ', username: ' + username);
        TodoDataService.deleteTodo(username, id)
        .then(
            response => {
                this.setState({message: `Delete of todo of id: ${id} is successful`});
                this.refreshTodos();
            }
        )
    }

    render() {
        console.log("LifeCycle of react: Inside Render");

        return(
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Done</th>
                                <th>Target Date</th>
                                <th>Delete</th>
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
                                        <td><button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
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

export default ListTodosComponent;