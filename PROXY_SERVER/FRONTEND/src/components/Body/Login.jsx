import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
    Grid,
    Paper,
    Slide,
    Button,
    Snackbar,
    Typography,
} from '@material-ui/core';
import {
    Send as SendIcon,
    Person as PersonIcon,
    Cancel as CancelIcon,
} from '@material-ui/icons';
import { TextFieldWrapperTeal } from '../FormikWrapper';
import useStylesLogin from '../../assets/styles/components/Login';
import { colors } from '../../assets/styles/containers/App';
import { login } from '../../redux/user/Slice';

const PROTOCOL = process.env.PROTOCOL;
const PROXY_SERVER = process.env.PROXY_SERVER;
const WITH_CREDENTIALS = process.env.WITH_CREDENTIALS;

const initialValues = { email: '', password: '' };
const validationSchema = Yup.object({
    email: Yup.string().email('It should be a valid email').required('Required'),
    password: Yup.string().required('Required'),
});

const SlideDown = props => <Slide {...props} direction="down" />;

const Login = () => {

    const dispatch = useDispatch();
    const classes = useStylesLogin();
    const [snackData, setSnackData] = useState({ open: false, message: '' });
    const closeSnack = () => setSnackData({ ...snackData, open: false });

    const onSubmit = ({ email, password }, { setSubmitting }) => {
        const submit = async () => {
            try {
                const resp = await axios.post(
                    `${PROTOCOL}://${PROXY_SERVER}/auth/login`, {},
                    { headers: { Authorization: `Basic ${btoa(`${email}:${password}`)}` }, withCredentials: WITH_CREDENTIALS }
                );
                dispatch(login(''));
            } catch (err) {
                const message = err.response && (err.response.status === 401) ? 'Wrong credentials' : 'Something wrong happen, try latter';
                setSnackData({ open: true, message, });
                setTimeout(() => setSubmitting(false), 3000);
            }
        }
        submit();
    }

    return (
        <>
            <Formik
                validationSchema={validationSchema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {
                    ({ submitForm, isSubmitting }) => (
                        <Form>
                            <Grid
                                container
                                component={Paper}
                                direction="column"
                                justify="space-around"
                                className={classes.formGrid}
                                alignItems="center"
                            >
                                <div className={classes.formWave}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill={colors.normalBlue} fillOpacity="1" d="M0,128L40,138.7C80,149,160,171,240,165.3C320,160,400,128,480,106.7C560,85,640,75,720,90.7C800,107,880,149,960,154.7C1040,160,1120,128,1200,96C1280,64,1360,32,1400,16L1440,0L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path>
                                    </svg>
                                </div>
                                <Typography variant="h5" className={classes.formOverWave}>
                                    Login
                                        <PersonIcon fontSize="large" />
                                </Typography>
                                <TextFieldWrapperTeal
                                    id="email"
                                    type="email"
                                    label="Name"
                                    name="email"
                                />
                                <TextFieldWrapperTeal
                                    id="email"
                                    type="password"
                                    label="Password"
                                    name="password"
                                />
                                <Button
                                    variant="contained"
                                    onClick={submitForm}
                                    disabled={isSubmitting}
                                    className={classes.formButton}
                                >
                                    Enter
                                        <SendIcon fontSize="small" />
                                </Button>
                            </Grid>
                        </Form>
                    )
                }
            </Formik>
            <Snackbar
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                open={snackData.open}
                onClose={closeSnack}
                autoHideDuration={5000}
                className={classes.snackbar}
                TransitionComponent={SlideDown}
            >
                <Typography component="div">
                    <Paper className={`${classes.snackbarContent} ${classes.error}`}>
                        <CancelIcon />
                        {snackData.message}
                    </Paper>
                </Typography>
            </Snackbar>
        </>
    );
}

export default Login;