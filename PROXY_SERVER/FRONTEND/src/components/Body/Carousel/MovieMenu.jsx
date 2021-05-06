import React, { useState, useLayoutEffect } from 'react';
import {
    useTheme,
    useMediaQuery,
} from '@material-ui/core';
import { } from '@material-ui/icons';
import useStylesMovieMenu from '../../../assets/styles/components/MovieMenu';

import Search from './Search';
import MovieTab from './MovieTab';
import MovieBlock from './MovieBlock';

const MovieMenu = () => {

    const theme = useTheme();
    const classes = useStylesMovieMenu();
    const [queryMatch, setQueryMatch] = useState(true);
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    useLayoutEffect(() => {
        setQueryMatch(matches);
    }, [matches]);

    return (
        <>
            <Search />
            {
                queryMatch ? <MovieTab /> : <MovieBlock />
            }
        </>
    );
}

export default MovieMenu;