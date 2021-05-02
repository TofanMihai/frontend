import React, { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FighterDataService from "../service/FighterDataService";
import EventDataService from "../service/EventDataService";
import ForumService from "../service/ForumService";

class AdministratorPanel extends Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
            startingDate: '',
            tournamentType: '',
            fighters: [],
            events: [],
            message: null,
            errorMessage: null,
            fighterHideCounter: 0,
             eventHideCounter: 0

        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
        this.getEvents = this.getEvents.bind(this)
        this.getFighters = this.getFighters.bind(this)
        this.hideFightersTable = this.hideFightersTable.bind(this)
        // this.hideEventsTable = this.hideEventsTable.bind(this)
        this.switchButtonsVisibility = this.switchButtonsVisibility.bind(this)
        this.sendMessage = this.sendMessage.bind(this)
        this.testFighters = this.testFighters.bind(this)
        this.sendArrivalTestDate = this.sendArrivalTestDate.bind(this)
        this.generateSchedule = this.generateSchedule.bind(this)
        this.nextWeekEvents = this.nextWeekEvents.bind(this)
        this.previousWeeksEvents = this.previousWeeksEvents.bind(this)
        this.switchButtonsVisibility = this.switchButtonsVisibility.bind(this)
    }

    nextWeekEvents(){
        EventDataService.nextWeek(this.state.startingDate)
            .then(
                response =>
                {
                    const tb = document.getElementById("eventTableID");
                    tb.style.visibility = "visible";
                    this.setState({events: response.data})
                    console.log(this.state.events)
                }
            )
            .catch(
                () => {
                    this.setState({errorMessage: "No events to display"})
                }
            )
    }

    previousWeeksEvents(){
        EventDataService.previousWeek(this.state.startingDate)
            .then(
                response =>
                {
                    const tb = document.getElementById("eventTableID");
                    tb.style.visibility = "visible";
                    this.setState({events: response.data})
                    console.log(this.state.events)
                }
            )
            .catch(
                () => {
                    this.setState({errorMessage: "No events to display"})
                }
            )
    }

    componentDidMount()
    {
        EventDataService.resetWeek().then(()=>{console.log("week reset")})
        const tb1 = document.getElementById("fighterTableID");
        tb1.style.visibility = "hidden";
        const tb2 = document.getElementById("eventTableID");
        tb2.style.visibility = "hidden";
        this.switchButtonsVisibility(1);
        this.setState({fighterHideCounter: 1})
     //   this.setState({eventHideCounter: this.state.fighterHideCounter + 1})

    }

    generateSchedule(){
        EventDataService.generateEvents(this.state.startingDate, this.state.tournamentType)
            .then(
                response => {
                    this.setState({events: response.data})
                    this.setState({errorMessage:null})

                    const tb = document.getElementById("eventTableID");
                    tb.style.visibility = "visible";
                }
            )
            .catch(
                error => {
                    this.setState({errorMessage: null})
                    this.setState({message: "The schedule is finished"})
                    this.setState({events:this.state.events})
                    console.log(this.state.events)

                }
            )
    }

    sendArrivalTestDate()
    {
        FighterDataService.sendArrivalTestDate(this.state.startingDate).then(() => {console.log(this.state.startingDate)})
    }

    getEvents(){
        EventDataService.getEvents()
            .then(
                response => {
                    this.setState({events: response.data})
                }
            )
    }

    getFighters(){
        FighterDataService.getFighters()
            .then(
                response => {
                    this.setState({fighters: response.data})
                }
            )
    }

    sendMessage()
    {
        let forumMessage = "Dear Fighters,"
    + "The UFC International commitee is happy to announce that "
    + "the annual UFC Tournament will start the registering period beginning "
    + "with the date of " + this.state.startingDate +". Because of the current  "
    + "Coronavirus pandemic, fighters are required to present "
    + "themselves at the tournament with a negative Covid Test, "
    + "where further examinations will take place."
    + " Thank you for your cooperation."
    + "                   Good luck to you all !";

        ForumService.sendForumMessage(forumMessage)
            .then
            (  () =>
                {
                    this.setState({message: "Invitations have been sent"})
                    this.setState({errorMessage: null})
                }
            )
    }

    // hideEventsTable()
    // {
    //     // eslint-disable-next-line
    //     if((this.state.eventHideCounter %2) !== 0)
    //     {
    //         this.setState({events: []})
    //         const tb = document.getElementById("eventTableID");
    //         tb.style.visibility = "hidden";
    //     }
    //
    //     else
    //     {
    //         this.getEvents()
    //         const tb = document.getElementById("eventTableID");
    //         tb.style.visibility = "visible";
    //     }
    //
    //
    //     this.setState({eventHideCounter: this.state.eventHideCounter + 1})
    // }

    switchButtonsVisibility(value)
    {
        const tb1 = document.getElementById("fightersButtonID");
        const tb2 = document.getElementById("generateScheduleButtonID");
        const tb3 = document.getElementById("fightersTableButtonID");
        const tb4 = document.getElementById("prevID");
        const tb5 = document.getElementById("nextID");

        // eslint-disable-next-line
        if(value == 0)
        {
            // tb1.style.visibility = "hidden";
            tb1.remove();
            tb2.style.visibility = "visible";
            tb3.style.visibility = "visible";
            tb4.style.visibility = "visible";
            tb5.style.visibility = "visible";

        }

        else
        {
            tb1.style.visibility = "visible"
            tb2.style.visibility = "hidden"
            tb3.style.visibility = "hidden";
            tb4.style.visibility = "hidden";
            tb5.style.visibility = "hidden";
        }

    }

    hideFightersTable()
    {
        console.log(this.state.fighterHideCounter)
        // eslint-disable-next-line
        if((this.state.fighterHideCounter %2) === 0)
        {
            this.setState({fighters: []})
            const tb = document.getElementById("fighterTableID");
            tb.style.visibility = "hidden";
        }

        else
        {
            this.getFighters()
            const tb = document.getElementById("fighterTableID");
            tb.style.visibility = "visible";
        }

        this.setState({fighterHideCounter: this.state.fighterHideCounter + 1})
    }

    testFighters()
    {
        if(this.state.startingDate){
            FighterDataService.updateFighters(this.state.startingDate)
                .then(
                    response => {
                        this.setState({message: response.data})
                        this.setState({errorMessage: null})
                        console.log(this.state.fighterHideCounter)
                        const tb1 = document.getElementById("fighterTableID");
                        tb1.style.visibility = "visible";
                        const tb2 = document.getElementById("fightersTableButtonID");
                        tb2.style.visibility = "visible";
                        this.getFighters()
                        this.setState({fighterHideCounter: 0})
                        if(response.data === "All the fighters are ready. The tournament can begin")
                        {
                            this.switchButtonsVisibility(0)
                        }


                    }
                )
                .catch(
                    error => {
                        this.setState({errorMessage: error.response.data})
                        this.setState({message: null})
                    }
                )
        }
        else
        {
            this.setState({errorMessage: "The invitations for the tournament have not yet been sent"})
            this.setState({message: null})
        }
    }

    onSubmit(values)
    {
        this.setState({startingDate: values.startingDate})
        this.setState({tournamentType: values.tournamentType})
        this.sendMessage()
        this.sendArrivalTestDate()
    }

    validate(values)
    {
        let errors = {}
        if (!values.startingDate)
        {
            errors.startingDate = 'The Date field cannot be empty'
        }
        if(!values.tournamentType)
        {
            errors.tournamentType = 'The Tournament you wish to generate must have a type'
        }
        return errors
    }

    render()
    {
        let { startingDate, tournamentType} = this.state
        return (
            <div>
                <br/>
                <h1 align="center" >Administrator Panel</h1>
                <hr/>
                <hr/>
                <br/>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                {this.state.errorMessage && <div className="alert alert-danger">{this.state.errorMessage}</div>}
                <div className="container">
                    <Formik
                        initialValues={{startingDate,tournamentType}}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="startingDate" component="div"
                                                  className="alert alert-danger" />
                                    <ErrorMessage name="tournamentType" component="div"
                                                  className="alert alert-danger" />
                                    <fieldset className="startingDate">
                                        <label>Registration Date</label>
                                        <Field className="form-control" type="date" name="startingDate" />
                                    </fieldset>
                                    <br/>
                                    <fieldset className="form-group">
                                        <label>Select the type of tournament you wish to generate</label>
                                        <div role="group" aria-labelledby="my-radio-group">
                                            <label >
                                                <Field type="radio" name="tournamentType" value="Weekly" id = "weeklyRadio" />
                                                Weekly
                                            </label>
                                            <br/>
                                            <label>
                                                <Field type="radio" name="tournamentType" value="Monthly" id = "monthlyRadio" />
                                                Monthly
                                            </label>
                                        </div>
                                    </fieldset>
                                    <div className="wrapper">
                                        <button className="btn sendInvitationsButton" type="submit" >Send Invitations</button>
                                    </div>

                                </Form>
                            )
                        }
                    </Formik>

                </div>
                <div className="wrapper" >
                <button className="btn testFightersButton" onClick={this.testFighters} id = "fightersButtonID">Test Fighters</button>
                </div>
                <div className="wrapper" >
                    <button className="btn fightersTableButton" onClick={this.hideFightersTable} id = "fightersTableButtonID">Fighters Table</button>
                </div>

                <div className="table" align={"center"}>
                    <thead>
                    <tr id = "fighterTableID">
                        <th >First Name</th>
                        <th>Last Name</th>
                        <th>Weight</th>
                        <th>In Isolation</th>
                        <th>Scheduled</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.fighters.map(
                            fighter =>
                                <tr key={fighter.idFighter}>
                                    <td>{fighter.firstName}</td>
                                    <td>{fighter.lastName}</td>
                                    <td>{fighter.weight}</td>
                                    <td>{fighter.inIsolation}</td>
                                    <td>{fighter.scheduled}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </div>

                <div className="wrapper">
                <button className="btn generateScheduleButton" onClick={this.generateSchedule} id = "generateScheduleButtonID" >Generate Schedule</button>
                </div>

                {/*<button className="btn btn-warning" onClick={this.hideEventsTable}>Events Table</button>*/}
                <br/>




                <div className="weekButtons">
                    <button className="btn btn1" onClick={this.previousWeeksEvents} id = "prevID">Previous week</button>
                    <button className="btn btn2" onClick={this.nextWeekEvents} id="nextID">Next week</button>
                </div>

                <div className="table" align={"center"}>
                    <thead>
                    <tr id = "eventTableID">
                        <th>Location</th>
                        <th>Date</th>
                        <th>Hour</th>
                        <th>Fighter One</th>
                        <th>Fighter Two</th>
                        <th>Week</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.events.map(
                            event =>
                                <tr key={event.idEvent}>
                                    <td>{event.location}</td>
                                    <td>{event.date}</td>
                                    <td>{event.hour}</td>
                                    <td>{event.fighterOne}</td>
                                    <td>{event.fighterTwo}</td>
                                    <td>{event.week}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </div>
            </div>




        )
    }
}

export default AdministratorPanel