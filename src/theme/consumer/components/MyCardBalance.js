import bgCard from '../../../img/consumer/bg-card.png';

let cardHeadHeight = 90;
let inButtDiam = 47;
let inButtDiam1 = (inButtDiam*57.4468085106383)/100;
let paddStatus = 5;
let fontSizeStatus = 7;

const styles = theme => ({
    root: {},
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
        padding: '0 18px 10px'
    },
    avatar: {
        marginTop: -42,
        border: '3px solid #fff',
        width: 49,
        height: 49
    },
    wrapTitle: {
        paddingTop: 25,
        height: 17,
        display: 'table-cell',
        verticalAlign: 'middle'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        textTransform: 'uppercase',
        lineHeight: 1,
        verticalAlign: 'middle',
        marginRight: 10
    },
    wrapGiftCard: {
        marginRight: 30,
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
        marginBottom: 20
    },
    mt: {
        marginTop: 5,
    },
    wrapButton: {
        position: 'absolute',
        height: inButtDiam,
        width: inButtDiam,
        right: -inButtDiam/2 +4,
        top: cardHeadHeight-inButtDiam/2,
    },
    bgCircle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        borderRadius: '50%',
        backgroundColor: '#fff',
        opacity: 0.1
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
    }
});

export default styles;