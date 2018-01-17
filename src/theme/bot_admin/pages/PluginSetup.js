

const styles = theme =>  ({
    titleForm: {
        marginBottom: 18,
        fontSize: 13,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff',
    },
    rowStep: {
        position: 'relative',
        marginBottom: 12,
    },
    numberStep: {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 17,
        height: 17,
        backgroundColor: '#a99771',
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold',
        borderRadius: '50%',
        textAlign: 'center',
        position: 'absolute',
        top: 4,
        left: 0,
    },
    textStep: {
        display: 'inline-flex',
        marginLeft: 24,
        color: '#fff',
        opacity: 0.4,
        fontSize: 11,
    },
    wrapFakeBtn: {
        display: 'block',
        marginTop: 33,
        marginBottom: 50,
        width: '100%',
        textAlign: 'center'
    },
    fakeBtn: {
        border: '1px solid #fff',
        fontSize: 10,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        padding: '16px 23px',
        borderRadius: 22.5,
        color: '#fff'
    }

});

export default styles;

