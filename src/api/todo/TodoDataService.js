import axios from "axios";

class TodoDataService {

    retrieveAllTodos(username) {
        console.log("Retrieved Todos");
        return axios.get(`http://localhost:8080/api/users/${username}/todos`);
    }

}

export default new TodoDataService();