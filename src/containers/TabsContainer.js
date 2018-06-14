/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TABS } from '../constants/Tabs';
import NavigateTabs from '../views/Tabs';

class TabsContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.location ? props.location.pathname : false
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, value) {
        this.setState({ value });
    };

    static isValidValue(value) {
        var isValid = false;
        if (value === false) {
            isValid = true;
        } else TABS.map((tab) => {
            if (value.indexOf(tab.value) !== -1) isValid = true;
        });
        return isValid;
    }

    render() {
        const { value } = this.state;
        return (
            <React.Fragment>
                {TabsContainer.isValidValue(value) &&
                    <NavigateTabs value={value} handleChange={this.handleChange} tabs={TABS} />}
            </React.Fragment>

        );
    };
}

TabsContainer.propTypes = {
    location: PropTypes.object
};

export default TabsContainer;