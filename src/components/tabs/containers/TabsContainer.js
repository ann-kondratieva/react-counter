/* global process */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { TABS } from '../constants/Tabs';
import NavigateTabs from '../views/Tabs';

class TabsContainer extends Component {

    static isValidValue(value) {
        var isValid = false;
        if (value === '/') {
            isValid = true;
        } else {
            isValid = TABS.some((tab) => {
                return value.indexOf(tab.value) !== -1;
            });
        }
        return isValid;
    }

    render() {
        const { location } = this.props;
        const props = {
            value: (location !== '/') ? location : false,
            tabs: TABS
        };
        return TabsContainer.isValidValue(location) &&
            (<NavigateTabs {...props} />);
    };
}

TabsContainer.propTypes = {
    location: PropTypes.string
};

export default TabsContainer;