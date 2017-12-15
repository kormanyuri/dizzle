//let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

import bgPattern from '../../../img/plugin/intro-pattern.png';


const styles = theme =>  ({
    root: {
        backgroundColor: '#877650',
    },
    dialog: {
        '& >div:last-child': {
            borderRadius: 4,
            backgroundColor: '#877650',
            maxWidth: 384,
            minWidth: 290,
            width: '90%',
            boxSizing: 'border-box',
            overflowY: 'visible',
        }
    },
    dialogTitle: {
        paddingTop: 27,
        '& h2': {
            fontSize: 15,
            fontWeight: 'bold',
            color: '#fff',
            textAlign: 'center',
        }
    },
    dialogContent: {
      padding: 0,
        paddingBottom: 22,
    },
    stepInf: {
        minHeight: 75,
        fontSize: 12,
        fontWeight: 500,
        color: 'rgba(255,255,255,0.5)',
        textAlign: 'center',
        paddingTop: 8,
        //paddingBottom: 10,
        lineHeight: 1.583,
        paddingLeft: 37,
        paddingRight: 37,
    },
    paternBg: {
        minHeight: 136,
        boxSizing: 'border-box',
        backgroundImage: 'url(' + bgPattern + ')',
        backgroundSize: 'cover',
        textAlign: 'center',
        paddingTop: 35
    },
    button: {
        fontSize: 12,
        color: 'rgba(255,255,255,1)',
        textTransform: 'lowercase',
        bottom: -33,
        verticalAlign: 'middle',
        '&:hover': {
            backgroundColor: 'rgba(0,0,0,0)',
            color: 'rgba(255,255,255,0.5)',
        }
    },
    textAlignCenter: {
        textAlign: 'center',
        '& a': {
            fontSize: 12,
            fontWeight: 500,
            color: '#fff',
            '&:hover': {
                color: 'rgba(255,255,255,0.5)',
            }
        }
    }

});

export default styles;