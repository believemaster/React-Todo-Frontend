import React, {Component} from "react";
import moment from 'moment';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import TodoDataService from "../../api/todo/TodoDataService.js";
import AuthenticationService from "./AuthenticationService";

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: "",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount() {
        let username = AuthenticationService.getLoggedInUserName();

        if(this.state.id === -1) {
            return
        }

        TodoDataService.retrieveTodo(username, this.state.id)
        .then(
            response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            })
        )
    }

    validate(values){
        let errors = {}
        if(!values.description) {
            errors.description = "Enter a Description"
        } else if(values.description.length < 5) {
            errors.description = "Enter atleast 5 characters in Description";
        }

        if (!moment(values.targetDate).isValid()) {
            errors.targetDate = "Enter a valid target Date";
        }

        return errors
    }

    onSubmit(values) {
        let username = AuthenticationService.getLoggedInUserName();

        let todo = {
            id: this.state.id,
            description: values.description,
            targetDate: values.targetDate
        }

        if (this.state.id === -1) {
            TodoDataService.postTodo(username, this.state.id, todo)
                .then(() => this.props.history.push("/todos"))

            console.log(values);
        } else {
            TodoDataService.updateTodo(username, this.state.id, todo)
                .then(() => this.props.history.push("/todos"))

            console.log(values);
        }
    }

    render() {
        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
// or by destructuring
        let { description, targetDate } = this.state;

        return(
            <div>
                <h4>Todo Component for the id: { this.props.match.params.id }</h4>
                <div className="container">
                    <Formik 
                        initialValues={{
                            description,
                            targetDate
                        }}
                        onSubmit={this.onSubmit}
                        // validateOnChange={false}
                        // validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning"/>
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning"/>
                                    <fieldset className="form-group">
                                        <label htmlFor="">Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label htmlFor="">Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success btn-block">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}

export default TodoComponent;