//example of conditional rendering
import React from 'react';

function UserGreeting(props){
    return <h1>Welcome back!</h1>;
}
function GuestGreeting(props){
    return <h1>Please sign up!</h1>;
}
function Greeting(props){
    let isLoggedIn = props.isLoggedIn;
    if(isLoggedIn){
        return <UserGreeting />;
    }else{
        return <GuestGreeting />;
    }
}
function LoginButton(props){
    return (
        <button onClick={props.handleClick}>
            Login
        </button>
    );
}
function LogoutButton(props){
    return (
        <button onClick={props.handleClick}>
            Logout
        </button>
    );
}


class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isloggedIn: false};
    }
    handleLoginClick = () =>{
        this.setState({isloggedIn: true});
    }
    handleLogoutClick = () =>{
        this.setState({isloggedIn: false});
    }
    render(){
        let isLoggedIn = this.state.isloggedIn;
        let button;
        if(isLoggedIn){
            button = <LogoutButton handleClick={this.handleLogoutClick} />
        }else{
            button = <LoginButton handleClick={this.handleLoginClick} />
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                {button}
            </div>
        );
    }

}


export default LoginControl;