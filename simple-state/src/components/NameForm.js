import React from 'react';

class NameForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {textValue: "", selectValue: "me"};
    }
    handleSubmit = (event)=>{
        alert(`The state is ${JSON.stringify(this.state)}`);
        event.preventDefault();
    };
    handleTextChange = (event)=>{
        this.setState({textValue: event.target.value});
    };
    handleSelectChange = (event)=>{
        this.setState({selectValue: event.target.value});
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='txtBox'>Name:</label>
                <input type='text' id='txtBox' onChange={this.handleTextChange} />
                <select value={this.state.selectValue} onChange={this.handleSelectChange}>
                    <option value='me'>me</option>
                    <option value='myself'>myself</option>
                    <option value='I'>I</option>
                </select>
                <input type='submit' value='Submit' />
            </form>
        );
    }
}

export default NameForm;