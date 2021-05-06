import React from 'react';
import { useDispatch } from 'react-redux';
import {
    Paper,
    IconButton,
    Typography,
} from '@material-ui/core';
import {
    AddCircle as AddCircleIcon,
    RemoveCircle as RemoveCircleIcon,
    PlayCircleFilled as PlayCircleFilledIcon,
} from '@material-ui/icons';
import useStylesCarouselItem from '../../../assets/styles/components/CarouselItem';
import { addUserMovie, deleteUserMovie } from '../../../redux/movie/Thunk';

const CarouselItem = ({ isUserList, movie }) => {

    const dispatch = useDispatch();
    const classes = useStylesCarouselItem();
    const { id, title, year, duration, cover } = movie;

    const addMovieToUserList = () => dispatch(addUserMovie(movie));
    const deleteMovieToUserList = () => dispatch(deleteUserMovie(id));

    return (
        <>
            <Paper className={classes.card}>
                <img src={cover} className={classes.cardImage} alt="" />
                <div className={classes.cardInfo}>
                    <div className={classes.cardInfoWrapper}>
                        <div className={classes.cardButtons}>
                            <IconButton color="inherit">
                                <PlayCircleFilledIcon fontSize="large" />
                            </IconButton>
                            {
                                isUserList ?
                                    <IconButton onClick={deleteMovieToUserList} color="inherit">
                                        <RemoveCircleIcon fontSize="large" />
                                    </IconButton>
                                    : <IconButton onClick={addMovieToUserList} color="inherit">
                                        <AddCircleIcon fontSize="large" />
                                    </IconButton>
                            }
                        </div>
                        <Typography align="center" variant="h6">
                            <div>{title}</div>
                            <div>{duration} min.</div>
                        </Typography>
                    </div>
                </div>
            </Paper>
        </>
    );
}

export default CarouselItem;