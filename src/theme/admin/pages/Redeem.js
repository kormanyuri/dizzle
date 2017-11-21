const brdW = 7;
const qrSize = 102;

const styles = theme =>  ({
    scanArea: {
        width: qrSize,
        height: qrSize,
        border: brdW+'px solid #fff',
        borderRadius: 13,
        position: 'relative',
        boxSizing: 'border-box',
        margin: '65px auto 80px',
        '&:after': {
            display: 'block',
            content: "''",
            width: (qrSize + 2*brdW),
            height: 18,
            position: 'absolute',
            top: '50%',
            bottom: '50%',
            marginTop: -9,
            marginLeft: -brdW,
            backgroundColor: '#6e6041',
        },
        '&:before': {
            display: 'block',
            content: "''",
            height: (qrSize + 2*brdW),
            width: 18,
            position: 'absolute',
            left: '50%',
            right: '50%',
            marginLeft: -9,
            marginTop: -brdW,
            backgroundColor: '#6e6041',
        }
    },
    text: {
        fontSize: 11,
        color: '#fff',
        opacity: 0.4,
        textAlign: 'center',
        lineHeight: 1.2,
        marginBottom: 38,
    },
    fullWidth: {
        width: '100%'
    }
});

export default styles;