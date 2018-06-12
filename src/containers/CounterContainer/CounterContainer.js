import React, { Component } from 'react';

import { Counter } from '../../views/Counter/index';

import PropTypes from 'prop-types';

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

    UNSAFE_componentWillReceiveProps({ countersNumber }) {
        const prevCountersNumber = this.props.countersNumber;
        console.log('container will receive props');
        if (prevCountersNumber > countersNumber && CounterContainer.isOdd(this.state.counter)) {
            this.decrementState();
        } else if (prevCountersNumber < countersNumber && CounterContainer.isEven(this.state.counter)) {
            this.incrementState();
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should container update');
        if (this.state.counter !== nextState.counter) {
            return true;
        } else {
            return false;
        }
    }

    UNSAFE_componentWillMount() {
        console.log('container will mount');
    }

    componentDidMount() {
        console.log('container did mount');
    }

    UNSAFE_componentWillUpdate() {
        console.log('container will update');
    }

    componentDidUpdate() {
        console.log('container did update');
    }

    componentWillUnmount() {
        console.log('container will unmount');
    }

    static isEven(number) {
        return number % 2 === 0 && number !== 0;
    }

    static isOdd(number) {
        return number % 2 !== 0 && number !== 0;
    }

    decrementState() {
        this.setState(function (prevState) {
            return {
                counter: prevState.counter - 1
            };
        });
    }

    incrementState() {
        this.setState(function (prevState) {
            return {
                counter: prevState.counter + 1
            };
        });
    }

    onIncrementClick() {
        this.incrementState();
    }

    onDecrementClick() {
        this.decrementState();
    }


    onResetClick() {
        this.setState({ counter: 0 });
    }

    render() {
        console.log('container renders');
        const props = {
            counter: this.state.counter,
            onDecrementClick: this.onDecrementClick,
            onIncrementClick: this.onIncrementClick,
            onResetClick: this.onResetClick
        };

        return (
            <Counter {...props} />
        );
    }
}

CounterContainer.propTypes = {
    countersNumber: PropTypes.number.isRequired
};


export { CounterContainer };