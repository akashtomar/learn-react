import React from 'react';

function FormattedTimeStamp(props){
    return <p>{props.date.toLocaleTimeString()}</p>;
}

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount(){
        this.timerID = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount(){
        clearInterval(this.timerID);
    }
    tick(){
        this.setState({date: new Date()});
    }
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <div>It is <FormattedTimeStamp date={this.state.date} />.</div>
            </div>
        );
    }
}

export default Clock;