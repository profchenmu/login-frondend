import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';
import selecterStyle from './selecter.js';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import axios from 'axios';

import './selecter.scss';

function Login(props) {
    console.log(props)
    const classes = selecterStyle();

    const [values, setValues] = React.useState({
        username: '',
        password: '',

    });


    return (
        <div className='selecter-base'>
            <Paper className={classes.paper}>
                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                    <Button>
                        <a target="blank" href="https://jll.maps.arcgis.com/apps/opsdashboard/index.html#/f1b8a03b2da8482d821d5e159718ea67">BJ Office Market</a>
                    </Button>
                    <Button>
                        <a target="blank" href="https://jll.maps.arcgis.com/apps/opsdashboard/index.html#/d7e895dfb67d4ee3911bd98ac5a18281">BJ Office Transactions</a></Button>
                </ButtonGroup>
            </Paper>
        </div>
    )
}
export default Login;