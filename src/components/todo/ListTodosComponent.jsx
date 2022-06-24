import React, { Component } from "react";
import "./Todo.css";
import TodoDataService from "../../api/todo/TodoDataService";
import AuthenticationService from "./AuthenticationService";

class ListTodosComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            todos : 
            [
                // { id: 1, description: "Learn React", done: false, targetDate: new Date() },
                // { id: 2, description: "Learn Springboot", done: false, targetDate: new Date() },
                // { id: 3, description: "Learn Vue", done: false, targetDate: new Date() },
                // { id: 4, description: "Learn Laravel", done: false, targetDate: new Date() },
            ]
        }
    }

    // Best practice in react is : when calling api don't call api in constructor because state is not initialized until api is called completely, therefore empty the state

    componentDidMount() {
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

export default ListTodosComponent;