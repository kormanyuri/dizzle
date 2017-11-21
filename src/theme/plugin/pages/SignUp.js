import Background from '../../../img/plugin/bg-women.png';
import facebookIco from '../../../img/plugin/facebook.svg';
import twitterIco from '../../../img/plugin/twitter.svg';


const bodyW = 414;
let windowH = window.innerHeight;
let windowW = window.innerWidth;
let k = windowH / bodyW;


const styles = theme =>  ({
    root: {
        minHeight: 'inherit'
    },
    wrapper: {
        width: document.body.offsetWidth,
        maxWidth: 414,
        minHeight: '100%',
        height: '100%',
    },
    wrap: {
        backgroundColor: '#887650',
        backgroundImage: 'url(' + Background + ')',
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: ( k < 16/9 )?'100% auto':'auto 100%',
        minHeight: '100vh'
    },
    wrapContent: {
        minHeight: 'inherit',
        padding: '105px 32px 32px'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center'
    },
    subTitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: 48,
        textAlign: 'center'
    },
    textFieldRoot: {
        padding: 0,
        'label + &': {
            marginTop: theme.spacing.unit * 6,
        },
    },
    textFieldInput: {
        borderRadius: 4,
        background: theme.palette.common.white,
        border: '1px solid #fff',
        fontSize: 12,
        padding: '15px 16px',
        marginBottom: theme.spacing.unit * 2,
        textAlign: 'center',
        color: '#887650',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:focus': {
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    button: {
        width: '100%',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '16px 20px',
        borderRadius: 4,
        backgroundColor: '#887650',
        fontSize: 12,
        marginBottom: 20,
        boxShadow: 'none',
        '&:hover': {
            backgroundColor: 'rgba(136,118,80,0.8)',
        },
        '&:active': {
            boxShadow: 'none',
        }
    },
    link: {
        fontSize: 11,
        color: '#fff',
    },
    btnFacebook: {
        color: '#fff',
        backgroundColor: '#3b5998',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(59,89,152,0.8)',
        },
    },
    btnTwitter: {
        color: '#fff',
        backgroundColor: '#598dca',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(89,141,202,0.8)',
        },
    },
    gridItem: {
        padding: '5px 10px',
    },
    facebookIco: {
        display: 'inline-block',
        width: 22,
        height: 20,
        background: 'url(' + facebookIco + ')',
    },
    twitter: {
        display: 'inline-block',
        width: 28,
        height: 22,
        background: 'url(' + twitterIco + ')',
    },
    horDivid: {
        color: '#fff',
        fontSize: 11,
        marginBottom: 30,
        '&:before': {
            backgroundColor: '#d9d8d6',
        },
        '&:after': {
            backgroundColor: '#d9d8d6',
        }
    }
});

export default styles;