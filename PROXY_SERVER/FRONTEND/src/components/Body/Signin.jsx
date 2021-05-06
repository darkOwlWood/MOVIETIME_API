import React, { useState } from 'react';
import { Formik, Form } from 'formik';
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
    PersonAdd as PersonAddIcon,
    CheckCircle as CheckCircleIcon,
    Cancel as CancelIcon,
} from '@material-ui/icons';
import { TextFieldWrapperTeal } from '../FormikWrapper';
import useStylesSignin from '../../assets/styles/components/Signin';
import { colors } from '../../assets/styles/containers/App';

const PROTOCOL = process.env.PROTOCOL;
const PROXY_SERVER = process.env.PROXY_SERVER;
const WITH_CREDENTIALS = process.env.WITH_CREDENTIALS;

const initialValues = { name: '', lastName: '', email: '', password: '', repeatPassword: '' };
const validationSchema = Yup.object({
    name: Yup.string().max(30, 'No more than 30 characters').required('Required'),
    lastName: Yup.string().max(50, 'No more than 50 characters').required('Required'),
    email: Yup.string().max(50, 'No more than 50 characters').email('It should be a valid email').required('Required'),
    password: Yup
        .string()
        .min(10, 'At least 10 characters or more')
        .max(50, 'No more than 30 characters')
        .matches(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{10,30}$/, 'Should have at least one uppercase, lowercase and number')
        .required('Required'),
    repeatPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords don\'t match!').required('Required'),
});

const SlideDown = props => <Slide {...props} direction="down" />;

const Signin = () => {

    const classes = useStylesSignin();
    const [snackData, setSnackData] = useState({ open: false, type: 'success', icon: CheckCircleIcon, message: '', });
    const closeSnack = () => setSnackData({ ...snackData, open: false });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        const submit = async () => {
            try {
                const { repeatPassword, ...formData } = values;
                await axios.post(
                    `${PROTOCOL}://${PROXY_SERVER}/auth/signin`,
                    { ...formData },
                    { withCredentials: WITH_CREDENTIALS }
                );
                resetForm({ isSubmitting: true });
                setSnackData({ open: true, type: 'success', icon: CheckCircleIcon, message: 'Successfully registration' });
            } catch (err) {
                console.error(err);
                const message = err.response && (err.response.status === 409) ? 'The email is already in use' : 'Something wrong happen, try latter';
                setSnackData({ open: true, type: 'error', icon: CancelIcon, message, });
            } finally {
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
                                justify="space-around"
                                alignItems="center"
                                direction="column"
                                className={classes.formGrid}
                                component={Paper}
                                elevation={3}
                            >
                                <div className={classes.formWave}>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                                        <path fill={colors.normalBlue} fillOpacity="1" d="M0,96L48,117.3C96,139,192,181,288,181.3C384,181,480,139,576,101.3C672,64,768,32,864,64C960,96,1056,192,1152,229.3C1248,267,1344,245,1392,234.7L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                                    </svg>
                                </div>
                                <Typography variant="h5" className={classes.formOverWave}>
                                    Signin
                                    <PersonAddIcon fontSize="large" />
                                </Typography>
                                <TextFieldWrapperTeal
                                    id="name"
                                    name="name"
                                    label="Name"
                                    type="text"
                                    size="small"
                                />
                                <TextFieldWrapperTeal
                                    id="lastName"
                                    name="lastName"
                                    label="Last Name"
                                    type="text"
                                    size="small"
                                />
                                <TextFieldWrapperTeal
                                    id="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    size="small"
                                />
                                <TextFieldWrapperTeal
                                    id="password"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    size="small"
                                    FormHelperTextProps={{ className: classes.helperText }}
                                />
                                <TextFieldWrapperTeal
                                    id="repeatPassword"
                                    name="repeatPassword"
                                    label="Repeat Password"
                                    type="password"
                                    size="small"
                                />
                                <Button
                                    variant="contained"
                                    onClick={submitForm}
                                    disabled={isSubmitting}
                                    className={classes.formButton}
                                >
                                    Register
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
                    <Paper className={`${classes.snackbarContent} ${classes[snackData.type]}`}>
                        <snackData.icon />
                        {snackData.message}
                    </Paper>
                </Typography>
            </Snackbar>
        </>
    );
}

export default Signin;