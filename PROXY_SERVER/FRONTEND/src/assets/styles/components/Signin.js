import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';
import { styles as LoginStyles } from './Login';

export const styles = {
    ...LoginStyles,
    formGrid: {
        ...LoginStyles.formGrid,
        marginTop: '10px',
        height: '570px',
    },
}

export default makeStyles(styles);