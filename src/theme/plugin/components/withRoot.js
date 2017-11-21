const styles = theme => ({
    '@global': {
        html: {
            background: theme.palette.background.default,
            WebkitFontSmoothing: 'antialiased', // Antialiasing.
            MozOsxFontSmoothing: 'grayscale', // Antialiasing.
            minHeight: '100vh',
            fontFamily: 'Quicksand, sans-serif',
        },
        body: {
            backgroundColor: '#f2f2f2',
            maxWidth: 414,
            minHeight: '100vh',
            margin: '0 auto',
            position: 'relative'
        },
        div: {
            boxSizing: 'border-box'
        },
        input: {
            '-webkit-appearance': 'none',
            '&:focus': {
                boxShadow: 'none !important',
                borderColor: 'rgba(255,255,255,0) !important',
            }
        },
        ':focus': {
            outline: 'none'
        }
    },
});

export default styles;