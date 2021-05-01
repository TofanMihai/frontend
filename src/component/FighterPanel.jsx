import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FighterDataService from "../service/FighterDataService";
import CovidTestDataService from "../service/CovidTestDataService";

class FighterRegistration extends Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
            firstName: '',
            lastName: '',
            weight: '',
            inIsolation: 'Yes',
            scheduled: 'No',
            arrivalTestDate: '2021-02-20',
            message: null,
            errorMessage: null

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }


    // Ce face cand apasam pe submit
    onSubmit(values)
    {
        this.setState({errorMessage: null, message: null})
        let fighter =
        {
            firstName: values.firstName,
            lastName: values.lastName,
            weight: parseFloat(values.weight),
            inIsolation: 'Yes',
            scheduled: 'No',
        }
        FighterDataService.insertFighter(fighter)
            .then
            (
                response =>
                {
                    let covidTest =
                    {
                        fighterFirstName: values.firstName,
                        fighterLastName: values.lastName,
                        arrivalTest: 'Negative',
                        arrivalTestDate: this.state.arrivalTestDate,
                        secondTest : null,
                        secondTestDate: null
                    }
                    CovidTestDataService.insertCovidTest(covidTest)
                        .then(() => this.setState({ message: "Registered fighter "+ fighter.firstName + " " + fighter.lastName + " successfully" }))
                }
            )
            .catch
            (
                error =>
                {
                    this.setState({errorMessage: error.response.data})
                    console.log(error.response.data)
                }

            )

    }

    validate(values)
    {
        let errors = {}
        if (!values.firstName)
        {
            errors.firstName = 'First Name field cannot be empty'
        }
        if (!/^[a-zA-Z]+$/.test(values.firstName))
        {
            errors.firstName = 'Please enter a valid first name'
        }
        if (!values.lastName)
        {
            errors.lastName = 'Last Name field cannot be empty'
        }
        else if (!/^[a-zA-Z]+$/.test(values.lastName))
        {
            errors.lastName = 'Please enter a valid last name'
        }
        if (!values.weight)
        {
            errors.weight = 'Weight field cannot be empty'
        }
        else if (!/[0-9]+.?[0-9]?/.test(values.weight))
        {
            errors.weight = 'The Weight field has to contain a real number'
        }

        return errors
    }

    render()
    {
        let { firstName, lastName, weight} = this.state
        return (
            <div>
                <h3 align="center" >Fighter Registration</h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                <div className="container">
                    <Formik
                        initialValues={{ firstName, lastName, weight}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="firstName" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="lastName" component="div"
                                                  className="alert alert-warning" />
                                    <ErrorMessage name="weight" component="div"
                                                  className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>First Name</label>
                                        <Field className="form-control" type="text" name="firstName"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Last Name</label>
                                        <Field className="form-control" type="text" name="lastName"/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Weight</label>
                                        <Field className="form-control" type="text" name="weight" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Register</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default FighterRegistration