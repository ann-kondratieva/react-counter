import React from 'react';
import PropTypes from 'prop-types';

import TabsContainer from '../../../containers/TabsContainer';
import AboutUs from '../views/AboutUs';

var AboutUsContainer = ({ location }) => {
    return (
        <React.Fragment>
            <TabsContainer location={location} />
            <AboutUs />
        </React.Fragment>
    );

};

AboutUsContainer.propTypes = {
    location: PropTypes.object.isRequired
};

export default AboutUsContainer;