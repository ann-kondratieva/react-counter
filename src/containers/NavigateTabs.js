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
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    static isValidValue(value) {
        return value === '/about' || value === '/counters' || value === '/';
    }

    static getValidValue(value) {
        if (value === '/') return false;
        else return value;
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                {NavigateTabs.isValidValue(value) &&
                    <AppBar title="navigate">
                        <Tabs value={NavigateTabs.getValidValue(value)} onChange={this.handleChange}  >
                            <Tab value='/about' label="About Us" component={Link} to="/about" />
                            <Tab value='/counters' label="Counters" component={Link} to="/counters" />
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