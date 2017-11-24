import Background from '../../../img/consumer/bg-ingroupbuy.jpg';
import facebookIco from '../../../img/consumer/facebook.svg';
import twitterIco from '../../../img/consumer/twitter.svg';
import patternVert from '../../../img/consumer/pattern-v.png';

let diamAvatar = 80;

const styles = theme =>  ({
    root: {
        minHeight: 'inherit',
        paddingTop: 57,
        paddingBottom: 44,
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
        top: 168,
        zIndex: 1,
        width: '100%',
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 44,
    },
    card: {
        borderRadius: 6,
        backgroundColor: '#887650',
        backgroundImage: 'url(' + patternVert + ')',
        backgroundSize: '55px auto',
        backgroundRepeatX: 'no-repeat',
        padding: '26px 18px 34px',
        textAlign: 'center',
        marginBottom: 30,
    },
    name: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 3
    },
    subName: {
        fontSize: 11,
        fontWeight: 500,
        color: '#fff',
        opacity: 0.3,
        textTransform: 'uppercase',
        margin: 0
    },
    gridItem: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30
    },
    bigFs: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 0,
    },
    verTd: {
        position: 'relative',
        '&:after': {
            content: "''",
            display: 'block',
            height: '54%',
            width: '1px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            position: 'absolute',
            top: 30,
            right: 0
        }

    },
    time: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 4
    },
    progressbar: {
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
    horizd: {
        position: 'relative',
        '&:after': {
            content: "''",
            display: 'block',
            height: 1,
            margin: '7px 14%',
            backgroundColor: 'rgba(255,255,255,0.3)',
        }
    },
    divider: {
        color: '#9a9a9a',
        fontSize: 11,
        margin: '0 30px  10px',
        marginBottom: 30,
        paddingTop: 120,
        '&:before': {
            backgroundColor: '#e2e2e2',
        },
        '&:after': {
            backgroundColor: '#e2e2e2',
        }
    },
    btnFacebook: {
        color: '#fff',
        backgroundColor: '#3b5998',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold'
    },
    btnTwitter: {
        color: '#fff',
        backgroundColor: '#598dca',
        width: '100%',
        borderRadius: 4,
        height: 47,
        fontSize: 11,
        fontWeight: 'bold'
    },
    socGridItem: {
        padding: '5px 40px',
    },
    facebookIco: {
        display: 'inline-block',
        width: 22,
        height: 20,
        background: 'url(' + facebookIco + ')',
    },
    twitter: {
        display: 'inline-block',
        width: 28,
        height: 22,
        background: 'url(' + twitterIco + ')',
    },
    compIcon: {
        marginBottom: 15
    }

});

export default styles;