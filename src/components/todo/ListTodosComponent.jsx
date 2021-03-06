import React, { Component } from "react";
import "./Todo.css";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";
import moment from "moment";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);
        console.log("LifeCycle of react: Inside Constructor");
        this.state = {
            todos : [],
            message: null
        }
        
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
        this.updateTodoClicked = this.updateTodoClicked.bind(this);
        this.addTodoClicked = this.addTodoClicked.bind(this);
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

    // Update Todo
    updateTodoClicked(id){
        let username = AuthenticationService.getLoggedInUserName();
        console.log('id: ' +id+ ', username: ' + username);
        this.props.history.push(`/todos/${id}`);
    }

    // Add Todo
    addTodoClicked(){
        this.props.history.push(`/todos/-1`);
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
                                <th>Update</th>
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
                                        <td>{ moment(todo.targetDate).format("YYYY-MM-DD") }</td>
                                        <td><button className="btn btn-warning" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-danger" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    <div>
                        <button className="btn btn-info" onClick={this.addTodoClicked}>Create Todo</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListTodosComponent;