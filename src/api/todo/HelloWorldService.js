import axios from 'axios';

class HelloWorldService {

    executeHelloWorldService() {
        console.log("execute service");
        // returning back promise
        return axios.get("http://localhost:8080/api/hello-world")
    }

    executeHelloWorldBeanService() {
        console.log("execute service");
        return axios.get("http://localhost:8080/api/hello-world-bean")
    }

    executeHelloWorldPathVariableService(name) {
        console.log("execute service");
        return axios.get(`http://localhost:8080/api/hello-world/path-variable/${name}`)
    }
    
}

export default new HelloWorldService();