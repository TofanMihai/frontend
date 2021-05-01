import React, { Component } from 'react';
import ForumService from "../service/ForumService";

class ForumPanel extends Component
{

    constructor(props)
    {
        super(props)

        this.state =
        {
          message: ""
        }
        this.getMessage = this.getMessage.bind(this)
    }

    componentDidMount() {
        this.getMessage()
    }

    getMessage()
    {
        ForumService.getForumMessage()
            .then(
                response =>
                {
                    this.setState({message: response.data})
                }
            )
    }


    render()
    {
        let { message } = this.state
        return (
            <div>
                <br/>
                <h1 align="center" >Forum</h1>
                <hr/>
                <hr/>
                <br/>
                <div className="container">
                    <h3 class = "forumMessage" >{message}</h3>
                </div>
            </div>

        )
    }
}

export default ForumPanel