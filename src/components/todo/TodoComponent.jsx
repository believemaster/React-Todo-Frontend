import React, {Component} from "react";
import moment from 'moment';
import {Formik, Form, Field} from 'formik'

class TodoComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: 1,
            description: "Learn ReactJs",
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
    }

    render() {
        return(
            <div>
                <h4>Todo Component for the id: { this.props.match.params.id }</h4>
                <div className="container">
                    <Formik>
                        {
                            (props) => (
                                <Form>
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