import { colors } from '../containers/App';
import { makeStyles } from '@material-ui/core';

const styles = {
    mainGrid: {
        width: '100%',
        minHeight: '100vh',
        position: 'relative',
        backgroundColor: colors.softGrey,
    },
    headerGrid: {
        width: '100%',
        position: 'relative',
        zIndex: 10,
    },
    bodyGrid: {
        width: '100%',
        position: 'relative',
        zIndex: 10,
        flex: 1,
    },
    backgrondAlipse: {
        width: '100%',
        boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
        borderRadius: '0 0 100px 100px',
        position: 'absolute',
        zIndex: 5,
        top: '-350px',
    },
    backgrondAlipseBig: {
        background: colors.normalTeal,
        height: '700px',
    },
    backgrondAlipseMed: {
        background: colors.lightTeal,
        height: '680px',
    },
    backgrondAlipseSmol: {
        background: colors.darkTeal,
        height: '660px',
    },
    backgrondAlipseXSmol:{
        background: colors.normalTeal,
        height: '640px',
    }
}

export default makeStyles(styles);