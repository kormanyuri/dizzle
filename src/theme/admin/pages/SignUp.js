import Background from '../../img/login-bg.jpg';

const bodyW = 414;
let windowH = window.innerHeight;
let windowW = window.innerWidth;
let k = windowH / bodyW;

const styles = theme =>  ({
    root: {

    },
    wrap: {
        backgroundImage: 'url(' + Background + ')',
        backgroundPosition: '50% 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: ( k < 16/9 )?'100% auto':'auto 100%',
        minHeight: '100vh'
    },
    wrapcontent: {
        padding: '105px 32px 32px'
    },
    title: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        textAlign: 'center'
    },
    subtitle: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        marginBottom: 48,
        textAlign: 'center'
    },
    textFieldRoot: {
        marginBottom: 10,
    },
    textFieldInput: {
        textAlign: 'center',
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
    message: {
        left: 'auto',
        right: 'auto',
        transform: 'none',
        width: ( windowW > bodyW )? bodyW : '100%',
        '& div': {
            maxWidth: 'none',
            width: '100%'
        }
    },

});


export default styles;