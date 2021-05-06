import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

export const styles = {
    root: {
        width: '100%',
        marginTop: '60px',
        padding: '20px 5px 50px',
        boxSizing: 'border-box',
    },
    tabWrapper: {
        borderRadius: '4px',
        overflow: 'hidden',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    },
    tabsRoot: {
        borderRadius: '4px',
        backgroundColor: colors.normalTeal,
    },
    tabsIndicator: {
        height: '4px',
        backgroundColor: colors.lightBlue,
    },
    tabPanel: {
        backgroundColor: colors.whiteSmoke,
    },
    tabButton: {
        width: '100px',
        fontWeight: 'bolder',
    },
}

export default makeStyles(styles);