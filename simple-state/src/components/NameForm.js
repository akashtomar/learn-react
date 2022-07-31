import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: ""};
    }
    handleSubmit = (event)=>{
        alert(`The value is ${this.state.value}`);
        event.preventDefault();
    };
    handleChange = (event)=>{
        this.setState({value: event.target.value});
    };
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='txtBox'>Name:</label>
                <input type='text' id='txtBox' onChange={this.handleChange} />
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default NameForm;