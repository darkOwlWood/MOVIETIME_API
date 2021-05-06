import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    searchContainer: {
        width: '100%',
        height: '226px',
        padding: '0 20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxSizing: 'border-box',
    },
    '@media (min-width: 600px)': {
        searchContainer: {
            padding: '0 50px',
        }
    }
}

export default makeStyles(styles);