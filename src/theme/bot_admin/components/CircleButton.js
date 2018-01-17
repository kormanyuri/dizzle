
const styles = theme => ({
    root: {
        width: 26,
        height: 26,
        borderRadius: '50%',
        textAlign: 'center',
        border: '4px solid rgba(255,255,255,0.2)',
        overflow: 'hidden',
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.5,
        }
    },
    bgButton: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        display: 'flex',
        textAlign: 'center',
        margin: 'auto',
        alignItems: 'center',
        '& svg': {
            margin: '0 auto'
        }
    }

});

export default styles;