import React from 'react';

class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.state = {isToggleOn: true};
        //binding immportant since this is not defined in functions by default
        //this is a scope issue to put is simply, here we are binding class this with function's this
        //as far as i understand
        this.handleClick = this.handleClick.bind(this);
    }
    //work around for this bind problem
    /** 1. use class field syntax (reccomended) to define functions (eventhandlers)
     *      handleClick = () => {}
     *  2. change how we pass event handler inside element
     *     onClick = {()=> this.handleClick()}
     */
    handleClick(){
        this.setState((prevState)=>{
            return {isToggleOn : !prevState.isToggleOn};
        });
    }
    
    render(){
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? "On": "off"}
            </button>
        );
    }
}

export default ToggleButton;