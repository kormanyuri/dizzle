let paddStatus = 5;
let fontSizeStatus = 7;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        height: scrollHeight
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative',

    },
    cardContent: {
        padding: '18px 18px 10px',
        '&:after': {
            content: "''",
            display: 'block',
            width: 80,
            height: '100%',
            background: 'rgba(255,255,255,0.1)',
            position: 'absolute',
            left: 0,
            top: 0,
        }
    },
    avatar: {
        //marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    rightCol: {
        marginLeft: 80,
        marginTop: -68,
        padding: '24px 18px 24px 0',
    },
    row: {
        color: '#fff',
        marginBottom: 18
    },
    param: {
        fontWeight: 'bold',
        fontSize: 11,
        textTransform: 'uppercase',
    },

    value: {
        fontWeight: 500,
        fontSize: 11,
        opacity: 0.3,
        textTransform: 'uppercase',
        '& a': {
            color: '#fff',
            fontWeight: 500,
            fontSize: 11,
            textTransform: 'uppercase',
            textDecoration: 'underline',
        }
    },
    status: {
        display: 'inline-block',
        minWidth: 56,
        fontSize: fontSizeStatus,
        color: '#fff',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        lineHeight: 1,
        padding: paddStatus + 'px 7px',
        borderRadius: (fontSizeStatus + paddStatus*2)/2,
        textAlign: 'center',
        letterSpacing: 1.5,
        boxSizing: 'border-box',
    },
    connectedStatus: {
        backgroundColor: '#77bf5e',
    },
    button: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        padding: '10px 15px',
        borderRadius: 4,
        backgroundColor: 'rgba(255,255,255,0.1)',
        fontSize: 11,
        lineHeight: 1,
        marginBottom: 20,
    },

});

export default styles;
