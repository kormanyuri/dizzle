const styles = theme => ({
    root: {
        //backgroundColor: 'yellow'
    },
    flex: {
        flex: 1,
        color: '#000',
        opacity: '0.5',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: -8
    },
    menuButton: {
        marginRight: -10,
        //marginRight: 20,
        color: '#000',
        opacity: '0.5',
        marginBottom: -8
    },
    backButton: {
        marginLeft: -9,
        //marginRight: 20,
        color: '#000',
        opacity: '0.5',
        marginBottom: -14
    },
    appBar: {
        background: 'none',
        boxShadow: 'none',
        borderBottom: '1px solid #e1e1e1',
        backgroundColor: '#f2f2f2',
        width: document.body.offsetWidth,
        maxWidth: 414,
        marginLeft: -(document.body.offsetWidth/2),
        zIndex: 998,
        padding: '0px !important'
    },
    shadow0: {
        fontSize: '44px'
    },
    positionFixed: {
        left: '50%'
    }
});

export default styles;