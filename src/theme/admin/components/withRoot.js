const styles = theme => ({
    '@global': {
        html: {
            height: '100%',
            margin: 0,
            padding: 0,
            background: theme.palette.background.default,
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            fontFamily: 'Quicksand, sans-serif',
        },
        body: {
            margin: 0,
            padding: 0,
        },
        div: {
            boxSizing: 'border-box'
        },
        input: {
            '-webkit-appearance': 'none',
            border: 'none',
            '&:focus': {
                boxShadow: 'none !important',
                borderColor: 'rgba(255,255,255,0) !important',
            },
        },
        ':focus': {
            outline: 'none'
        },

    },
});

export default styles;