import React from 'react';

import TabsContainer from '../../../components/Tabs';
import AboutUs from '../views/AboutUs';

var AboutUsContainer = () => {
    return (
        <React.Fragment>
            <TabsContainer location='/about' />
            <AboutUs />
        </React.Fragment>
    );

};

export default AboutUsContainer;