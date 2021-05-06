import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    '@keyframes chargeBlink': {
        from: {
            backgroundColor: colors.softGrey,
        },
        to: {
            backgroundColor: colors.whiteSmoke,
        }
    },
    card: {
        width: '200px',
        height: '300px',
        marginLeft: '20px',
        overflow: 'hidden',
        display: 'inline-block',
        position: 'relative',
        transition: '.4s',
        '&:hover': {
            transform: 'scale(1.1)',
        },
    },
    cardImage: {
        width: '100%',
        height: '100%',
        objectFit: 'fill',
        animation: '$chargeBlink 1s alternate infinite cubic-bezier(.91,.39,.94,.74)',
    },
    cardInfo: {
        width: '100%',
        position: 'absolute',
        bottom: 0,
    },
    cardInfoWrapper: {
        paddingBottom: '10px',
        borderRadius: '50%',
        transform: 'scale(0)',
        transformOrigin: 'center bottom',
        transition: '.4s',
        willChange: 'transform',
        backgroundColor: 'rgba(41, 182, 246, .9)', //IS like this due to the opacity
        color: colors.whiteSmoke,
        '$card:hover &': {
            borderRadius: '0',
            transform: 'scale(1)',
        }
    },
    cardButtons: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}

export default makeStyles(styles);