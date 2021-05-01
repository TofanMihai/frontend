import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FighterDataService from "../service/FighterDataService";
import CovidTestDataService from "../service/CovidTestDataService";

class FighterPanel extends Component
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


    onSubmit(values)
    {
        this.setState({errorMessage: null})
        this.setState({message: null})

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
                        .then( response =>
                        {
                            this.setState({ message: "Fighter "+ fighter.firstName + " " + fighter.lastName + " was successfully registered." })
                            this.setState({errorMessage: null})
                        }
                    )
                }
            )
            .catch
            (
                error =>
                {
                    this.setState({errorMessage: error.response.data})
                    this.setState({message: null})
                }

            )




    }

    validate(values)
    {
        let errors = {}
        if (!values.firstName)
        {
            errors.firstName = 'The First Name field cannot be empty'
        }
        else if (!/^[a-zA-Z]+$/.test(values.firstName))
        {
            errors.firstName = 'The First Name field has to contain only letters'
        }
        if (!values.lastName)
        {
            errors.lastName = 'The Last Name field has to contain only letters'
        }
        else if (!/^[a-zA-Z]+$/.test(values.lastName))
        {
            errors.lastName = 'Please enter a valid last name containing only letters'
        }
        if (!values.weight)
        {
            errors.weight = 'The Weight field cannot be empty'
        }
        else if (!/[0-9]+.?[0-9]?/.test(values.weight))
        {
            errors.weight = 'The Weight field has to contain a real number'
        }
        if(errors)
            this.setState({message: null})
        return errors
    }

    render()
    {
        let { firstName, lastName, weight} = this.state
        return (
            <div>
                <br/>
                <h1 align="center" >Fighter Registration Form</h1>
                <hr/>
                <hr/>
                <br/>
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
                                                  className="alert alert-danger" />
                                    <ErrorMessage name="lastName" component="div"
                                                  className="alert alert-danger" />
                                    <ErrorMessage name="weight" component="div"
                                                  className="alert alert-danger" />
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
                                    <div className="wrapper">
                                        <button className="btn btn-success" type="submit" >Register</button>
                                    </div>

                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>




        )
    }
}

export default FighterPanel