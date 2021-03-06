import axios from "axios";

class TodoDataService {

    retrieveAllTodos(username) {
        console.log("Retrieved Todos");
        return axios.get(`http://localhost:8080/api/users/${username}/todos`);
    }

    retrieveTodo(username, id) {
        return axios.get(`http://localhost:8080/api/users/${username}/todos/${id}`);
    }

    updateTodo(username, id, todo) {
        return axios.put(`http://localhost:8080/api/users/${username}/todos/${id}`, todo);
    }

    createTodo(username, todo) {
        return axios.post(`http://localhost:8080/api/users/${username}/todos`, todo);
    }

    deleteTodo(username, id) {
        return axios.delete(`http://localhost:8080/api/users/${username}/todos/${id}`);
    }

}

export default new TodoDataService();