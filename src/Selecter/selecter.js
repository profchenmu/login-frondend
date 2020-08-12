import {
    makeStyles
} from '@material-ui/core/styles';
import {
    red
} from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    login: {
        background: red,
    },
    margin: {
        margin: 5,
    },
    marginButton: {
        margin: '10px auto',
    },
    errorMsg: {
        marginTop: '5px',
        lineHeight: '1rem',
        height: '1rem',
    },
    logo: {
        width: '30%',
        margin: '15px auto',
    },
    paper: {
        padding: theme.spacing(12),
        margin: 'auto',
        height: '100%'
        // maxWidth: 500,
    },
    image: {
        width: 128,
        height: 128,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default useStyles