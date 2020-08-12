import React, { useState, useCallback } from 'react';
import clsx from 'clsx';

import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import ButtonBase from '@material-ui/core/ButtonBase';
import loginStyle from './loginStyle.js';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import FilledInput from '@material-ui/core/FilledInput';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';
import logo from './images/jll-logo.svg';
import axios from 'axios';

import './login.scss';

function Login(props) {
    console.log(props)
    const classes = loginStyle();

    const [values, setValues] = React.useState({
        username: '',
        password: '',

    });
    const [passwordDisplay, setShowPasswordValues] = React.useState({
        showPassword: false,
    });

    const [message, setMessage] = React.useState({
        message: '',
    });
    const [disabledValue, setDisabledValue] = React.useState({
        btnDisabled: false,
    });

    const displayErrorMsg = (error) => {
        setMessage({ message: error })
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setShowPasswordValues({ showPassword: !passwordDisplay.showPassword });
    };
    const toggleDisabled = (disabled) => {
        setDisabledValue({ btnDisabled: disabled });

    };

    const handleSubmit = () => {
        toggleDisabled(true)
        console.log(values)
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
                // 'content-type': 'application/x-www-form-urlencoded'
            },
            data: values,
            url: `/login`,
        };
        axios(options).then((res) => {

            if (res.data.code === 1) {
                props.history.push('/selecter')
                // window.location.href = 'https://arcg.is/1OH8aS'
            } else {
                displayErrorMsg('Invalid Username or Password!')
            }


            // res.redirect('https://arcg.is/1OH8aS')
        }).catch((err) => {
            toggleDisabled(false)
        })
    };
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className='login-base'>
            <div className={`login-root ${classes.root}`}>
                <Paper className={classes.paper}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm container>
                            <img src={logo} className={classes.logo} alt="logo" />
                            <form className={classes.root} noValidate autoComplete="off">

                                <TextField fullWidth className={classes.margin} id="standard-basic" label="User Name"
                                    onChange={handleChange('username')}
                                    onFocus={() => {
                                        displayErrorMsg(null);
                                        toggleDisabled(false)
                                    }}
                                />


                                <FormControl fullWidth className={clsx(classes.margin, classes.textField)}>
                                    <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
                                    <Input
                                        id="standard-adornment-password"
                                        type={passwordDisplay.showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        onChange={handleChange('password')}
                                        onFocus={() => {
                                            displayErrorMsg(null);
                                            toggleDisabled(false)
                                        }}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                >
                                                    {passwordDisplay.showPassword ? <Visibility /> : <VisibilityOff />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                    />
                                    <Typography align='left' className={classes.errorMsg} color='error'>{message.message}</Typography>
                                </FormControl>

                                <Typography align='left' className={classes.marginButton}>
                                    <Button size='large' variant="contained" color="primary"
                                        onClick={handleSubmit}
                                        disabled={disabledValue.btnDisabled}
                                    >
                                        Submit
                                    </Button>
                                </Typography>

                            </form>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </div>
    )
}
export default Login;