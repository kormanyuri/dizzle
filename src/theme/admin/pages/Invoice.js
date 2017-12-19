

const styles = theme =>  ({
    titleForm: {
        marginBottom: 18,
        fontSize: 13,
        fontWeight: 500,
        //textTransform: 'uppercase',
        color: '#fff',
    },
    wrapFilter: {
        marginLeft: -11,
        marginRight: -11,
    },
    WrapStartDate: {
        '& .DayPickerInput-Overlay': {
            left: 0,
            right: 'auto',
            '& input': {
                width: '100%'
            }
        },
        '& .DayPickerInput': {
            width: '100%',
            position: 'relative',
            zIndex: 2,
            '& input': {
                width: '100%',
                background: 'none',
                color: '#fff',
                border: '1px solid #a99771',
                padding: '9px 10px',
                boxSizing: 'border-box',
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAgMAAABiJsVCAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlMATTZwG2APAAAAMUlEQVQI12NgatBgYGB0EGFgiFq6KoAhbGpmAENoaGgAgwMDgwCDo6sIlMDkQgiwYgCzOwsjYhEQ/gAAAABJRU5ErkJggg==')",
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'calc(100% - 10px)',
                backgroundPositionY: 'calc(50% - 0px)',
                cursor: 'pointer',
                '&::-webkit-input-placeholder':{
                    color: '#fff',
                    opacity: 0.5,
                    fontSize: 11,
                    fontWeight: 'normal'
                },
                '&:focus':{
                    borderColor: '#a99771 !important',
                }
            },
        }
    },
    WrapEndDate: {
        '& .DayPickerInput-Overlay': {
            right: 0,
            left: 'auto',
        },
        '& .DayPickerInput': {
            width: '100%',
            position: 'relative',
            zIndex: 2,
            '& input': {
                width: '100%',
                background: 'none',
                color: '#fff',
                border: '1px solid #a99771',
                padding: '9px 10px',
                boxSizing: 'border-box',
                backgroundImage: "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOAgMAAABiJsVCAAAACVBMVEUAAAD///////9zeKVjAAAAA3RSTlMATTZwG2APAAAAMUlEQVQI12NgatBgYGB0EGFgiFq6KoAhbGpmAENoaGgAgwMDgwCDo6sIlMDkQgiwYgCzOwsjYhEQ/gAAAABJRU5ErkJggg==')",
                backgroundRepeat: 'no-repeat',
                backgroundPositionX: 'calc(100% - 10px)',
                backgroundPositionY: 'calc(50% - 0px)',
                cursor: 'pointer',
                '&::-webkit-input-placeholder':{
                    color: '#fff',
                    opacity: 0.5,
                    fontSize: 11,
                    fontWeight: 'normal'
                },
                '&:focus':{
                    borderColor: '#a99771 !important',
                }
            },
        }
    },
    wrapInfo: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 11,
        color: '#fff',
        marginTop: 27,
        marginBottom: 27,
    },
    iconInfo: {
        marginRight: 14,
        cursor: 'auto',
        '&:hover': {
            opacity: 1,
        }
    },
    dialogRow: {
        color: '#fff',
        marginLeft: -15,
        marginRight: -15,
        padding: '20px 35px',
        '&:nth-child(2n)': {
            backgroundColor: 'rgba(169,151,113,0.2)',
            padding: '9px 35px'
        },
        '&:nth-child(2n+1)': {
            padding: '18px 35px'
        },
    },
    param: {
        fontSize: 13,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: 6,
    },
    paramValue: {
        fontSize: 12,
        textTransform: 'uppercase',
        opacity: 0.5,
    },
    table: {
        '& tr td': {
            paddingLeft: 8,
            paddingRight: 8,
            '&:first-child': {
                paddingLeft: 20,
            },
            '&:last-child': {
                paddingLeft: 17,
            }
        },
        '& tr th': {
            paddingLeft: 10,
            paddingRight: 10,
            '&:first-child': {
                paddingLeft: 20,
            },
            '&:last-child': {
                paddingLeft: 17,
            }
        },
        '& tbody tr': {
            cursor: 'pointer',
        },
        '& tbody td': {
            borderRight: '1px solid rgba(238,234,227,0.2)',
        }
    },
    fullWidth: {
        width: '100%'
    }

});

export default styles;

