import React, {Component} from "react";
import { Link } from "react-router-dom";
import HelloWorldService from "../../api/todo/HelloWorldService.js";

class WelcomeComponent extends Component {

    constructor(props) {
        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this);

        this.state = {
            welcomeMessage: "",
            errorMessage: ""
        }

        this.handleSuccessResponse = this.handleSuccessResponse.bind(this);
        this.handleError = this.handleError.bind(this);
    }

    render() {
        return(
            <div>
                { this.state.errorMessage && <div className="alert alert-danger">{ this.state.errorMessage }</div> }
                <h1>Welcome</h1>
                <div className="container">
                    Welcome <b>{ this.props.match.params.name }</b>. You can manage your <Link to="/todos">todos here</Link>
                </div>
                <div className="container">
                    Click here to get customized welcome message.
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Get Welcome Message</button>
                </div>
                <div className="container">
                    <span className="display-4">{ this.state.welcomeMessage }</span>
                </div>
            </div>
        );
    }

    retrieveWelcomeMessage(){
        // HelloWorldService.executeHelloWorldService()
        // .then(response => this.handleSuccessResponse(response))

        // HelloWorldService.executeHelloWorldBeanService()
        // .then(response => this.handleSuccessResponse(response))

        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name)
        .then(response => this.handleSuccessResponse(response))
        .catch(error => this.handleError(error))
    }

    handleSuccessResponse(response) {
        console.log(response); 
        // console.log(response.data);
        // console.log(response.status);
        // console.log(response.statusText);
        // console.log(response.headers);
        // console.log(response.config);
        // response will be somthing like this: {data: 'Hello World', status: 200, statusText: '', headers: {…}, config: {…}, …}
        this.setState({ 
            welcomeMessage: response.data.message // getting data.message from the response as we cannot call object directly and setting the empty state to data
        })    
    }
    
    handleError(error) {
        console.log(error.response);
        this.setState({ 
            errorMessage: error.response.data.message
        })  
    }

}

export default WelcomeComponent;