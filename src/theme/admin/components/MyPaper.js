import bgHeadPaper from '../../img/bg-paper.png';

const pdgTop = 70;
const pdgBottom = 22;
let windowH = window.innerHeight;

const styles = theme => ({
    root: {
        minHeight: '100vh',
        padding: pdgTop+'px 15px ' + pdgBottom + 'px',
        '& > div': {
            minHeight: (windowH - pdgTop - pdgBottom),
            backgroundColor: '#6e6041',
            borderRadius: 5,
        },

    },
    header: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        height: 68,
        backgroundImage: 'url(' + bgHeadPaper + ')',
        backgroundSize: 'auto 140%',
        padding: '18px 27px',
        '& span': {

        }
    },
    content: {
      padding: '20px 27px',
        '& > div:last-child': {
            marginBottom: 0,
        },
    },
    avatar: {
        width: 30,
        height: 30,
    },
    title: {
        marginLeft: 8
    }


});

export default styles;