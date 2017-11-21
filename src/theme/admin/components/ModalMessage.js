import bgCard from '../../../img/admin/bg-card.png'

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
        minHeight: 34,
        backgroundImage: 'url(' + bgCard + ')',
        backgroundSize: 'cover',
    },
});

export default styles;