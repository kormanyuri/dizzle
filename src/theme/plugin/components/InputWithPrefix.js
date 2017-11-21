const styles = theme => ({
    root: {
        display: 'flex',
        width: '100%',
        fontSize: 14,
        color: '#877650',
        backgroundColor: '#fff',
        padding: '13px 16px 10px',
        fontWeight: 'bold',
        borderRadius: 3,
        marginBottom: 20,
        '& > div': {
            display: 'flex',
            margin: 'auto',
            fontSize: 'inherit',
            color: 'inherit',
            opacity: 0.7,
            textAlign: 'center',
            verticalAlign: 'middle',
            width: '25%',

        },
        '& input': {
            display: 'inline-flex',
            width: '100%',
            border: 'none',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            opacity: 0.7,
            padding: 0,
            lineHeight: 1,
        },
        '& span': {
            display: 'inline-block',
            fontSize: 'inherit',
            fontWeight: 'inherit',
            color: 'inherit',
            opacity: 0.7,
            verticalAlign: 'middle',
            lineHeight: 1,
        }
    },

});

export default styles;