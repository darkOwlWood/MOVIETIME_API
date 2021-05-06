import React from 'react';
import {
    Grid,
    Paper,
    Typography,
} from '@material-ui/core';
import useStylesHome from '../../assets/styles/components/Home';

const Home = () => {

    const classes = useStylesHome();

    return (
        <>
            <Grid container alignItems="flex-start">
                <Grid
                    item
                    xs={12}
                    container
                    justify="center"
                    className={classes.topGrid}
                >
                    <div className={classes.mainInfo}>
                        <Typography variant="h6">
                            Welcome to the Movie Time API, to start to use it you only need to create an account and then you could save your favorites movies from a catalogue.
                        </Typography>
                    </div>
                </Grid>
                <Grid
                    item
                    xs={12}
                    container
                    justify="space-around"
                    alignItems="center"
                    className={classes.bottomGrid}
                >
                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <Paper className={classes.subInfo}>
                            <Typography component="div">
                                <div className={classes.subInfoTitle}>Large catalogue</div>
                                <div>
                                    Select from our 3 category catalogue the movies you most like and save it from watch it later.
                                </div>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <Paper className={`${classes.subInfo} ${classes.middleSubInfo}`}>
                            <Typography component="div">
                                <div className={classes.subInfoTitle}>Always renew</div>
                                <div>
                                    Enjoy our rich selection that is ronovating every week with thas last movies.
                                </div>
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid
                        item
                        md={3}
                        xs={12}
                    >
                        <Paper className={classes.subInfo}>
                            <Typography component="div">
                                <div className={classes.subInfoTitle}>Unlimited storage</div>
                                <div>
                                    Add or erase an unlimted quantity of movies to your own play list.
                                </div>
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Home;