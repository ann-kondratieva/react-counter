/* global process */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

var NavigateTabs = ({ value, handleChange, tabs }) => {
    return (
        <AppBar title="navigate">
            <Tabs value={value} onChange={handleChange} >
                {tabs.map(({ value, label }) => (
                    <Tab key={value} value={value} label={label} component={Link} to={value} />
                ))}
            </Tabs>
        </AppBar>
    );
};

NavigateTabs.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    handleChange: PropTypes.func.isRequired,
    tabs: PropTypes.array.isRequired,
};

export default NavigateTabs;