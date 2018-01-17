import bgCard from '../../../img/admin/bg-card.png'

let inButtDiam = 26;
let inButtDiam1 = (inButtDiam*65)/100;

const styles = theme => ({
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
        minHeight: 62,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
    },
    wrapTitle: {
        paddingTop: 7,
    },
    wrapButton: {
        display: 'inline-block',
        position: 'relative',
        height: inButtDiam,
        width: inButtDiam,
        lineHeight: inButtDiam,
        verticalAlign: 'middle'
    },
    bgCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: 0.2
    },
    inButton: {
        position: 'absolute',
        width: inButtDiam1,
        height: inButtDiam1,
        left: '50%',
        top: '50%',
        marginTop: -inButtDiam1/2,
        marginLeft: -inButtDiam1/2,
        backgroundColor: '#fff',
        textAlign: 'center',
        color: '#887650'
    },
});

export default styles;