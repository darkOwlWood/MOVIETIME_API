import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core'

export const styles = {
    header: {
        color: colors.whiteSmoke,
    },
    headerItem: {
        width: '140px',
        display: 'flex',
    },
    headerTitle: {
        fontWeight: 'bolder',
        textAlign: 'center',
        flex: 1,
    },
    headerButton: {
        width: '70px',
        color: colors.whiteSmoke,
        borderColor: colors.whiteSmoke,
        fontWeight: 'bolder',
    },
}

export default makeStyles(styles);