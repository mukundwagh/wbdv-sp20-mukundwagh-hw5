import React from "react";

export default class TopicPillsItem extends React.Component {

    constructor(props) {
        super(props)
    }

    state = {
        active: false,
    }

    editTopic = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
    }

    saveTopic = () => {
        this.setState(prevState => ({
            active: !prevState.active
        }))
        this.props.updateTopic(this.props.topic)

    }


    render() {
        return(
            <div className="p-3">
            <a className="nav-link active" data-toggle="pill" style={{color: 'white'}} role="tab"
               aria-controls="v-pills-home" aria-selected="true">
                <div className="row">
                    <div className="col-md-10 col-10">

                        {
                            !this.state.active &&
                            this.props.topic.title
                        }
                        {
                            !this.state.active &&
                            <button onClick={()=>this.editTopic()}  className="fa fa-pencil p-1 float-left"></button>

                        }
                        {
                            this.state.active &&
                            <input
                                onChange={(e)=> this.props.topic.title = e.target.value}
                                placeholder={this.props.topic.title}/>
                        }
                        {

                            !this.state.active &&
                            <button onClick={()=>this.props.deleteTopic(this.props.topic._id)}  className="fa fa-trash p-1 float-right"></button>
                        }
                        {
                            this.state.active &&
                            <button onClick={()=>this.saveTopic()}  className="fa fa-check p-1"></button>
                        }
                    </div>
                </div>
            </a>
            </div>
        )
    }
}