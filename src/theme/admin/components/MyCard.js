
const styles = theme => ({
    root: {
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        padding: '0px 24px 25px ',
        marginBottom: 21,
    },
    indicator: {
        height: 3,
        width: '100%',
        marginTop: -1,
        marginBottom: 22,
        '& >div': {
            height: '100%',
            backgroundColor: '#a99771',
        }
    },
    paramValue: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        lineHeight: 1,
        marginBottom: 8,
    },
    paramName: {
        width: 80,
        fontSize: 14,
        color: '#fff',
        lineHeight: 1.2,
        opacity: 0.5,
        marginBottom: 13,
    },
    myCardInf: {
        height: 0,
        fontSize: 11,
        color: '#fff',
        lineHeight: 1.2,
        opacity: 0.4,
        overflow: 'hidden',
        transition: 'all 0.3s ease-in-out',
    },
    myCardInfShow: {
        height: 70,
    },
    showInfBtn: {
      opacity: 1,
        marginLeft: -5,
    },
    showInfBtnActive: {
        opacity: 0.5,
    },


});

export default styles;