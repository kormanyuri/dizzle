let cardHeadHeight = 38;

let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const styles = theme => ({
    root: {
        minHeight: 'inherit',
        paddingTop: 55,
        paddingBottom: 44,
        height: (width>320)?'auto':'100%'
    },
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginLeft: 15,
        marginRight: 15,
        marginTop: 45,
        position: 'relative'
    },
    cardHeader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 -50px',
        padding: 18,
        marginBottom: 12,
    },
    cardContent: {
        padding: '0 18px 10px'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: 1,
        verticalAlign: 'middle',
        marginRight: 10,
        marginBottom: 25,
    }
});

export default styles;