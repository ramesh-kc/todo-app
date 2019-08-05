import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
        this.reset = this.reset.bind(this);
    }
    render() {
        return (
            <div className="App">
                <CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset}>Reset</button>
                </div>
            </div>
        );
    }
    increment(by) {
        this.setState(
            (previousState) => {
                return { counter: previousState.counter + by }
            });
    }
    decrement(by) {
        this.setState(
            (previousState) => {
                return { counter: previousState.counter - by }
            });
    }
    reset() {
        this.setState({
            counter: 0
        });
    }
}

class CounterButton extends Component {
    constructor() {
        super();
        this.state = {
            counter: 0
        }
    }
    render() {
        return (
            <div className="counter">
                <button onClick={() => this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={() => this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        );
    }
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propsType = {
    by: PropTypes.number
}

export default Counter;