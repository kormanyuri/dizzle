const bodyW = 414;
let windowH = window.innerHeight;
let windowW = window.innerWidth;

const styles = theme => ({
    root: {
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
        left: (windowW > 414)? '50%' : 0,
        marginLeft: (windowW > 414)? '-207px': 0,
        zIndex: 998,
    },
});

export default styles;