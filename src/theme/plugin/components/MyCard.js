import bgCard from '../../../img/plugin/bg-card.png'

let cardHeadHeight = 70;
let inButtDiam = 26;
let inButtDiam1 = (inButtDiam*65)/100;

const styles = theme => ({
    card: {
        borderRadius: 6,
        boxShadow: 'none',
        backgroundColor: '#877650',
        marginBottom: 45,
        position: 'relative'
    },
    cardHeader: {
        minHeight: cardHeadHeight,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
        padding: 18,
    },
    cardContent: {
        padding: '0 18px 10px',
        paddingBottom: '20px !important'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    wrapTitle: {
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
    wrapGiftCard: {
        marginRight: 25,
    },
    dollars: {
        fontSize: 23,
        fontWeight: 'bold',
        color: '#fff',
        marginRight: 8
    },
    label: {
        display: 'inline-block',
        verticalAlign: 'top',
        lineHeight: 1.23,
        fontSize: 9,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#fff',
        opacity: 0.3
    },
    wrapPrice: {
        marginBottom: 20,
    },
    mt: {
        marginTop: 5,
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
    hidden: {
        display: 'none',
    },
    show: {
        display: 'block'
    },
});

export default styles;