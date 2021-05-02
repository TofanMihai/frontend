import React, { Component } from 'react';
import FighterPanel from "./FighterPanel";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainPanel from "./MainPanel";
import AdministratorPanel from "./AdministratorPanel";
import ForumPanel from "./ForumPanel";



class Assignment2SD extends Component {
    render() {
        return (
            <Router>
                <>
                    <Switch>
                        <Route path="/fighter/register" component={FighterPanel} />
                        <Route path="/" exact component={MainPanel} />
                        <Route path="/administrator" component={AdministratorPanel} />
                        <Route path="/forum" component={ForumPanel} />
                    </Switch>
                </>
            </Router>
        )
    }
}

export default Assignment2SD