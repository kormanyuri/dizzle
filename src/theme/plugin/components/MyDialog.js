import bgCard from '../../../img/plugin/bg-card.png'

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
            //overflow: 'hidden'
        }
    },
    dialogTitle: {
        minHeight: 83,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
        padding: 18,
    },
    wraptitle: {
        paddingTop: 7,
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: '27px',
        marginRight: 10,
        verticalAlign: 'middle'
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
    titleContentDialog: {
        fontSize: 15,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 3,
        marginTop: 15,
        //lineHeight: 1.2
    },
    subTitleContentDialog: {
        fontSize: 12,
        opacity: 0.5,
        color: '#fff',
        textAlign: 'center',
        lineHeight: 1.167,
        marginTop: 0,
        padding: '0 40px',
        marginBottom: 15,
    },
    wrapAction: {
        paddingBottom: 30,
        margin: 'auto'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
});

export default styles;