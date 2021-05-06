import { makeStyles } from '@material-ui/core';

export const styles = {
    wrapper: {
        width: '100%',
        height: '350px',
        overflowY: 'hidden',
        overflowX: 'auto',
    },
    carousel: {
        height: '100%',
        padding: '0 40px 0 20px',
        display: 'inline-flex',
        alignItems: 'center',
    }
}

export default makeStyles(styles);