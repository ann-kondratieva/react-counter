import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

import { styles } from './styles';

var ManageButtons = ({ onAddClick, onDeleteClick, onResetClick, classes }) => {
    return <Grid container spacing={16} className={classes.container}>
        <Grid item xs={12}>
            <Grid container spacing={16} alignItems="center" justify="center">
                <Grid item >
                    <Button onClick={onAddClick} variant="contained" color="primary">
                        Add New
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={onDeleteClick} variant="contained" color="primary">
                        Delete Last
                    </Button>
                </Grid>
                <Grid item >
                    <Button onClick={onResetClick} variant="contained" color="primary">
                        Reset
                    </Button>
                </Grid>
            </Grid>
        </Grid>

    </Grid>;
};

ManageButtons.propTypes = {
    classes: PropTypes.object.isRequired,
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired
};

export default withStyles(styles)(ManageButtons);