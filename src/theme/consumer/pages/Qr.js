let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

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
        height: (width>320)?scrollHeight:'100%'
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative',
        textAlign: 'center',
        paddingTop: 135,
        paddingBottom: 135,
    },

    cardcontent: {
        padding: '0 18px 10px'
    },
    qrwrap: {
        textAlign: 'center',
        paddingBottom: 5,
    },
    qrcode: {
        '& img': {
            display: 'inline-block',
            border: '16px solid #fff',
            borderRadius: 8
        }
    },
    text: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
    },
    number: {
        fontSize: 11,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 1.5,
        marginTop: -5,
        opacity: 0.3
    }

});

export default styles;