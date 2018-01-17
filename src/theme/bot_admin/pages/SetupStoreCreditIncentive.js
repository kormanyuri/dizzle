

const styles = theme =>  ({
    titleForm: {
        marginBottom: 18,
        fontSize: 13,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff',
    },
    formControl: {
        width: '100%',
    },
    fullWidth: {
        width: '100%',
        marginTop: 20,
    },
    deleteRowBtn: {
        display: 'inline-flex',
        position: 'absolute',
        top: 0,
        right: 0,
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        '& > span': {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: 21,
            height: 21,
            borderRadius: 12,
            boxSizing: 'border-box',
            fontSize: 20,
            fontWeight: 500,
            color: '#fff',
            border: '2px solid rgba(255,255,255,0.5)',
            cursor: 'pointer',
        }
    },
    inputRow: {
        position: 'relative',
        marginBottom: 5,
    }

});

export default styles;

