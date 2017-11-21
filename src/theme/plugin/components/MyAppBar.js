const styles = theme => ({
    root: {
        //marginTop: theme.spacing.unit * 3,
        width: '100%',
        height: 52,
    },
    logo: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#bababa',
        marginLeft: -1,
        lineHeight: 1,
    },
    flex: {
        flex: 1,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#bababa',
        textAlign: 'center',
        lineHeight: 1,
        marginLeft: -40
    },
    close: {
        marginRight: -10,
    },
    appbar: {
        height: 52,
        background: 'none',
        boxShadow: 'none',
        backgroundColor: '#fbfbfb',
        width: document.body.offsetWidth,
        maxWidth: 414,
        left: '50%',
        marginLeft: -(document.body.offsetWidth/2),
        zIndex: 998,
    },
});

export default styles;