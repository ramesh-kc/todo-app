import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <Router>
                    <>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <Route path="/welcome" component={WelcomeComponent} />
                            <Route component={ErrorComponent} />
                        </Switch>
                    </>
                </Router>
            </div>
        );
    }
}

class WelcomeComponent extends Component {
    render() {
        return <div>Welcome to in28Minutes</div>
    }
}

class ErrorComponent extends Component {
    render() {
        return <div>An Error Occured. I don't know what to do. Please contanct abcd-efgh-ijhj</div>
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
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }
    loginClicked() {
        if (this.state.username === 'in28minutes' && this.state.password === 'dummy') {
            this.props.history.push("/welcome");
            this.setState({ hasLoginFailed: false });
            this.setState({ showSuccessMessage: true });
        } else {
            this.setState({ hasLoginFailed: true });
            this.setState({ showSuccessMessage: false });
        }
    }

    render() {
        return (
            <div className="login">
                {(this.state.showSuccessMessage && <div> Login Successfull</div>)}
                {(this.state.hasLoginFailed && <div>Invalid Credentials</div>)}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}></input>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        );
    }
}
export default TodoApp;