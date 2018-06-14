import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { styles } from './styles';

var AboutUs = ({ classes }) => {
    return (
        <Grid
            container
            alignItems="center"
            justify="center">
            <div className={classes.headline}>
                <Grid item xs={12}  >
                    <Grid
                        container
                        alignItems="center"
                        justify="center">
                        <Typography variant="display3" className={classes.headlineText} >
                            About Us
                        </Typography>
                    </Grid>
                </Grid>
            </div>
            <div className={classes.content}>
                <Grid item xs={12}>
                    <Grid
                        container
                        alignItems="center"
                        justify="center">
                        <Typography variant="body1" >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ante ante, vestibulum eu ex in, molestie venenatis purus. Nam rutrum sem neque, non bibendum velit commodo ut. Duis tortor justo, porta et pellentesque sed, blandit bibendum massa.
                            Donec convallis neque et sem porta mollis. Cras gravida ex neque, a pellentesque velit pellentesque ac. Curabitur in purus in eros malesuada efficitur. Ut eget mollis arcu, a dictum est. Nunc non commodo libero. In posuere odio a erat ultricies egestas. Quisque posuere erat sit amet augue ornare, ac pretium diam rutrum. Sed ac metus sit amet turpis bibendum imperdiet. Vestibulum eu urna scelerisque, interdum neque et, vehicula mauris.
                            Donec sit amet est eu tortor ornare iaculis. Duis fermentum laoreet eros, eu consequat ipsum feugiat ac.
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        </Grid>
    );
};

AboutUs.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(AboutUs);