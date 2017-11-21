import Background from '../../../img/plugin/bg-ingroupbuy.jpg';
import bgCard from '../../../img/plugin/bg-card.png'


let diamAvatar = 80;

const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        paddingTop: 52,
        paddingBottom: 44,
        position: 'relative',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    bgImg: {
        backgroundImage: 'url(' + Background + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '0 50%',
        height: 386,
        backgroundSize: 'auto 100%'
    },
    wrapCard: {
        position: 'relative',
    },
    avatar: {
        border: '5px solid #fff',
        width: diamAvatar,
        height: diamAvatar,
        position: 'absolute',
        top: 45,
        left: '50%',
        right: '50%',
        zIndex: 3,
        marginLeft: -diamAvatar / 2

    },
    container: {
        position: 'absolute',
        width: '100%',
        top: 100,
        zIndex: '2',
        textAlign: 'center'
    },
    wrapTitle: {
        display: 'inline-block',
        padding: '25px 32px 12px',
        fontWeight: 'bold',
        backgroundColor: '#fff',
        borderRadius: 6,
        textTransform: 'uppercase',
    },
    title: {
        color: '#000',
        fontSize: 20,
        lineHeight: 1,
        margin: '0'
    },
    subTitle: {
        fontSize: 11,
        color: '#a3a3a3',
        lineHeight: 1,
        margin: '3px 0 0 0'
    },
    wrapAbs: {
        position: 'absolute',
        top: 125,
        zIndex: 1,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 44,
    },
    card: {
        borderRadius: 6,
        backgroundColor: '#887650',
        backgroundImage: 'url(' + bgCard + ')',
        backgroundPosition: '0 -20px',
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        padding: '95px 18px 50px',
        textAlign: 'center',
        marginBottom: 30,
    },
    name: {
        fontSize: 13,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 10,
        textTransform: 'uppercase'
    },
    subName: {
        fontSize: 11,
        fontWeight: 500,
        color: '#fff',
        opacity: 0.3,
        margin: 0,
        marginBottom: 5,
        textTransform: 'uppercase'
    },
    gridItem: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 18
    },
    bigFs: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 0,
    },
    vertD: {
        position: 'relative',
        '&:after': {
            content: "''",
            display: 'block',
            height: '54%',
            width: '1px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            top: 38,
            right: 0
        }

    },
    time: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4,
        marginTop: 22,
    },
    progressBar: {
        backgroundColor: '#fff',
        height: 9,
        borderRadius: 9/2,
        marginBottom: 30
    },
    indicator: {
        height: '100%',
        width: '90%',
        backgroundColor: '#887650',
        opacity: 0.7,
    },
    horizD: {
        position: 'relative',
        '&:after': {
            content: "''",
            display: 'block',
            height: 1,
            margin: '7px 14%',
            backgroundColor: 'rgba(255,255,255,0.3)',
        }
    },
    wrapButton: {
        marginTop: 35
    }

});

export default styles;