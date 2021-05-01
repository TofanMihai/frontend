import React, {Component} from 'react';

class MainPanel extends Component{

    constructor(props) {
        super(props);
        this.fighterClicked = this.fighterClicked.bind(this);
        this.administratorClicked = this.administratorClicked.bind(this);
        this.forumClicked = this.forumClicked.bind(this);
    }

    fighterClicked()
    {
        this.props.history.push('/fighter/register')
    }

    administratorClicked(){
        this.props.history.push('/administrator')
    }

    forumClicked(){
        this.props.history.push('/forum')
    }

    render() {
        return(
            <div className='container'>
                <br/>
                <h1 align="center" > Main Panel</h1>
                <hr/>
                <hr/>
                <br/>
                <h4 align={"center"}> Choose the user type</h4>
                <br/>
                <div className="mainPanelButtons">
                <button className="btn mp1" onClick={() => this.fighterClicked()}>Fighter</button>
                <button className="btn mp2" onClick={() => this.administratorClicked()}>Administrator</button>
                </div>
                <div className="mainPanelButtons">
                <button className="btn mp3" onClick={() => this.forumClicked()}>Forum</button>
                </div>
            </div>
        )
    }
}

export default MainPanel