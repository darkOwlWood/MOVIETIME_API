import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    root: {
        width: '100%',
        marginTop: '60px',
        padding: '20px 15px',
        boxSizing: 'border-box',
    },
    carouselWrapper: {
        marginBottom: '30px',
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: colors.whiteSmoke,
    },
    carouselWrapperHeader: {
        padding: '10px 20px',
        borderBox: 'box-sizing',
        color: colors.whiteSmoke,
        backgroundColor: colors.normalTeal,
        '& p': {
            fontWeight: 'bolder',
        }
    },
    carouselWrapperHeaderUser: {
        backgroundColor: colors.darkBlue,
    }
}

export default makeStyles(styles);