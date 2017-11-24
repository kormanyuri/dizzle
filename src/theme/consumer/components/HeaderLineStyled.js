const styles = theme => ({
    root: {
        fontWeight: 500,
        position: 'relative',
        zIndex: 2,
        overflow: 'hidden',
        textAlign: 'center',
        '&:before,&:after': {
            content: "''",
            display: 'inline-block',
            width: '100%',
            height: '1px',
            background: '#dbd9d6',
            zIndex: 1,
            position: 'relative',
            verticalAlign: 'middle',
            right: 15,
            margin: '0 0 0 -100%',

        },
        '&:before': {
            right: 19,
            margin: '0 0 0 -100%',
        },
        '&:after': {
            left: 19,
            margin: '0 -100% 0 0',
        },
    },

});

export default styles;