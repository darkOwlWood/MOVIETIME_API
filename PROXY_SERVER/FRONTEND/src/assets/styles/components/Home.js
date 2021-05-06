import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    topGrid: {
        height: '286px',
    },
    bottomGrid: {
        padding: '20px 0 20px',
    },
    mainInfo: {
        width: '400px',
        height: '226px',
        padding: '20px',
        textAlign: 'justify',
        fontWeight: 'bolder',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
        color: colors.whiteSmoke,
    },
    subInfoTitle: {
        fontWeight: 'bold',
    },
    subInfo: {
        height: '140px',
        padding: '20px',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    middleSubInfo: {
        margin: '20px 0 20px',
    }
}

export default makeStyles(styles);