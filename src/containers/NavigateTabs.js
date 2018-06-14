import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

class NavigateTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.location.pathname
        };
        console.log(this.state.value);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    static isValidValue(value) {
        return value === `${process.env.PUBLIC_URL}/about` || value === `${process.env.PUBLIC_URL}/counters` || value === `${process.env.PUBLIC_URL}/`;
    }

    static getValidValue(value) {
        if (value === `${process.env.PUBLIC_URL}/`) return false;
        else return value;
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                {NavigateTabs.isValidValue(value) &&
                    <AppBar title="navigate">
                        <Tabs value={NavigateTabs.getValidValue(value)} onChange={this.handleChange}  >
                            <Tab value={`${process.env.PUBLIC_URL}/about`} label="About Us" component={Link} to={`${process.env.PUBLIC_URL}/about`} />
                            <Tab value={`${process.env.PUBLIC_URL}/counters`} label="Counters" component={Link} to={`${process.env.PUBLIC_URL}/counters`} />
                        </Tabs>
                    </AppBar>}
            </React.Fragment>

        );
    };
}

NavigateTabs.propTypes = {
    location: PropTypes.object.isRequired
};




const NavigateTabsWithRouter = withRouter(NavigateTabs);
export default NavigateTabsWithRouter;