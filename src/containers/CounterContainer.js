import React, { Component } from 'react';
import Counter from '../components/Counter';

class CounterContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
        this.onDecrementClick = this.onDecrementClick.bind(this);
        this.onIncrementClick = this.onIncrementClick.bind(this);
        this.onResetClick = this.onResetClick.bind(this);
    }

    onIncrementClick() {
        this.setState(function (prevState) {
            return {
                counter: prevState.counter + 1
            };
        });
    }

    onDecrementClick() {
        this.setState(function (prevState) {
            return {
                counter: prevState.counter - 1
            };
        });
    }

    onResetClick() {
        this.setState({ counter: 0 });
    }

    render() {
        return (
            <Counter counter={this.state.counter} onDecrementClick={this.onDecrementClick}
                onIncrementClick={this.onIncrementClick} onResetClick={this.onResetClick} />
        );
    }
}

export default CounterContainer;