import React, { Component } from 'react';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavigateTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.location.pathname
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;
        return (
            <AppBar title="navigate">
                <Tabs value={value} onChange={this.handleChange}  >
                    <Tab value='/about' label="About Us" component={Link} to="/about" />
                    <Tab value='/counters' label="Counters" component={Link} to="/counters" />
                </Tabs>
            </AppBar>
        );
    };
}

NavigateTabs.propTypes = {
    location: PropTypes.object.isRequired
};




export { NavigateTabs };