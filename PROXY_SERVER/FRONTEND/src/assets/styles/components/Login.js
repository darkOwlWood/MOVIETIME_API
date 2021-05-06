import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    formWave: {
        position: 'absolute',
        zIndex: 10,
        top: 0
    },
    formOverWave: {
        position: 'relative',
        zIndex: 10,
    },
    formGrid: {
        width: '350px',
        height: '500px',
        marginTop: '30px',
        position: 'relative',
        overflow: 'hidden',
    },
    formButton: {
        width: '130px',
        color: colors.whiteSmoke,
        transition: '.4s',
        fontWeight: 'bolder',
        backgroundSize: '200% auto',
        backgroundImage: `linear-gradient(to right, ${colors.normalTeal} 0%, ${colors.lightTeal}  51%, ${colors.normalTeal}  100%)`,
        '&:hover': {
            backgroundPosition: 'right center',
        }
    },
    helperText: {
        width: '200px',
        wordWrap: 'break-word',
    },
    snackbar: {
        position: 'absolute',
    },
    snackbarContent: {
        width: '320px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bolder',
    },
    success: {
        color: colors.whiteSmoke,
        backgroundColor: colors.green,
    },
    error: {
        color: colors.whiteSmoke,
        backgroundColor: colors.red,
    },
}

export default makeStyles(styles);