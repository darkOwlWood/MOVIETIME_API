import React from 'react';
import { Grid } from '@material-ui/core';
import Header from './Header';
import useStylesLayout from '../../assets/styles/components/Layout';

const Layout = ({ children }) => {

    const classes = useStylesLayout();

    return (
        <>
            <Grid
                container
                direction="column"
                className={classes.mainGrid}
            >
                <Grid item className={classes.headerGrid}>
                    <Header />
                </Grid>
                <Grid
                    item
                    container
                    justify="center"
                    className={classes.bodyGrid}
                >
                    {children}
                </Grid>
                <div className={`${classes.backgrondAlipse} ${classes.backgrondAlipseBig}`}></div>
                <div className={`${classes.backgrondAlipse} ${classes.backgrondAlipseMed}`}></div>
                <div className={`${classes.backgrondAlipse} ${classes.backgrondAlipseSmol}`}></div>
                <div className={`${classes.backgrondAlipse} ${classes.backgrondAlipseXSmol}`}></div>
            </Grid>
        </>
    );
}

export default Layout;