import React, { useState, useLayoutEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    Tab,
    Tabs,
    AppBar,
} from '@material-ui/core';
import Carousel from './Carousel';
import useStylesMovieTab from '../../../assets/styles/components/MovieTab';
import { setSectionsMovies, setUserMovies } from '../../../redux/movie/Thunk';
import { getMovieList } from '../../../redux/movie/Selector';

const TabPanel = ({ children, value, index }) => {

    const classes = useStylesMovieTab();

    return (
        <>
            <div
                role="tabpanel"
                hidden={value !== index}
                className={classes.tabPanel}
            >
                {children}
            </div>
        </>
    );
}

const MovieTab = () => {

    const dispatch = useDispatch();
    const classes = useStylesMovieTab();
    const [value, setValue] = useState(0);
    const handleTabChange = (event, newValue) => setValue(newValue);
    const sectionUserMovieList = useSelector(getMovieList('userMovieList'));
    const sectionAMovieList = useSelector(getMovieList('sectionAMovieList'));
    const sectionBMovieList = useSelector(getMovieList('sectionBMovieList'));
    const sectionCMovieList = useSelector(getMovieList('sectionCMovieList'));

    useLayoutEffect(() => {
        dispatch(setUserMovies({}));
        dispatch(setSectionsMovies(['Animation', 'Comedy', 'Adventure']));
    }, []);

    return (
        <>
            <div className={classes.root}>
                <div className={classes.tabWrapper}>

                    <AppBar position="static">
                        <Tabs
                            value={value}
                            scrollButtons="on"
                            variant="scrollable"
                            onChange={handleTabChange}
                            classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                        >
                            <Tab className={classes.tabButton} label="User" />
                            <Tab className={classes.tabButton} label="Animation" />
                            <Tab className={classes.tabButton} label="Comedy" />
                            <Tab className={classes.tabButton} label="Adventure" />
                        </Tabs>
                    </AppBar>
                    <TabPanel value={value} index={0}>
                        <Carousel isUserList={true} movieList={sectionUserMovieList} />
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Carousel isUserList={false} movieList={sectionAMovieList} />
                    </TabPanel>
                    <TabPanel value={value} index={2}>
                        <Carousel isUserList={false} movieList={sectionBMovieList} />
                    </TabPanel>
                    <TabPanel value={value} index={3}>
                        <Carousel isUserList={false} movieList={sectionCMovieList} />
                    </TabPanel>
                </div>
            </div>
        </>
    );
}

export default MovieTab;