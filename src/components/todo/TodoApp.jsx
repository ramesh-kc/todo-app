import React, { Component } from 'react';

class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <LoginComponent></LoginComponent>
            </div>
        );
    }
}

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "in28minutes",
            password: "",
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this);
        this.loginClicked = this.loginClicked.bind(this);
    }

    handleChange(event) {
        console.log(this.state);
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            console.log("Successful");
            this.setState({ hasLoginFailed: false });
            this.setState({ showSuccessMessage: true });
        } else {
            console.log("Invalid Credentials");
            this.setState({ hasLoginFailed: true });
            this.setState({ showSuccessMessage: false });
        }
    }

    render() {
        return (
            <div className="login">
                <ShowSuccessMessage showSuccessMessage={this.state.showSuccessMessage}></ShowSuccessMessage>
                <ShowInvalidCredentails hasLoginFailed={this.state.hasLoginFailed}></ShowInvalidCredentails>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}

function ShowInvalidCredentails(props) {
    if (props.hasLoginFailed) {
        return <div>Invalid Credentials</div>;
    }
    return null;
}

function ShowSuccessMessage(props) {
    if (props.showSuccessMessage) {
        return <div>Successfull</div>
    }
    return null;
}

export default TodoApp;