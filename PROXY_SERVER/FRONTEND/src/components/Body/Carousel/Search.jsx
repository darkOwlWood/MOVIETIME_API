import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, TextField } from '@material-ui/core';
import useStylesSearch from '../../../assets/styles/components/Search';

import { colors } from '../../../assets/styles/containers/App';
import { setUserMovieListFilter } from '../../../redux/movie/Slice';
import { getUserMovieListFilter } from '../../../redux/movie/Selector';

const CssTextField = withStyles({
    root: {
        width: '100%',
        '& input': {
            color: colors.whiteSmoke,
        },
        '& label.MuiFormLabel-root': {
            color: colors.whiteSmoke,
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: colors.whiteSmoke,
            },
            '&:hover fieldset': {
                borderColor: colors.lightBlue,
            },
            '&.Mui-focused fieldset': {
                borderColor: colors.whiteSmoke,
            },
        },
    },
})(TextField);

const Search = () => {

    const dispatch = useDispatch();
    const classes = useStylesSearch();
    const userMovieListFilter = useSelector(getUserMovieListFilter);

    const handlerChange = event => dispatch(setUserMovieListFilter(event.target.value));

    return (
        <>
            <div className={classes.searchContainer}>
                <CssTextField
                    id="search"
                    type="text"
                    label="Search in user list..."
                    name="search"
                    variant="outlined"
                    onChange={handlerChange}
                    value={userMovieListFilter}
                />
            </div>
        </>
    );
}

export default Search;