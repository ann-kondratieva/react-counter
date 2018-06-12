import React from 'react';

import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

import { containerStyle } from './styles';

import PropTypes from 'prop-types';


var ManageButtons = ({ onAddClick, onDeleteClick, onResetClick }) => {
    return <Grid container spacing={16} style={containerStyle}>
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
    onAddClick: PropTypes.func.isRequired,
    onDeleteClick: PropTypes.func.isRequired,
    onResetClick: PropTypes.func.isRequired
};

export { ManageButtons };