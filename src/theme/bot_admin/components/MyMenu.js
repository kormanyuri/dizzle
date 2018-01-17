const bodyW = 414;
let windowW = window.innerWidth;

const styles = theme => ({
    root: {
        position: 'fixed',
        left: ( windowW > bodyW )? '50%' : 0,
        maxWidth: 414,
        width: ( windowW > bodyW )? bodyW : '100%',
        marginLeft: ( windowW > bodyW )? -(bodyW/2) : 0,
        margin: '0 auto',
        height: '100vh',
        zIndex: 1000,
        backgroundColor: '#877650',
        padding: '18px 15px',
        overflow: 'hidden',
        opacity: 1,
        transition: 'top 0.3s ease-in-out',
        top: '-100vh',

    },
    menuHeader: {
        marginBottom: 54,
        textAlign: 'right',
    },
    welcome: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        '& > span': {
            marginLeft: 7
        },
        marginLeft: 27
    },
    menuList: {
        padding: '30px 0',
        margin: 0,
        marginLeft: 75,
       listStyleType: 'none',
        '& li': {
            marginBottom: 20,
        },
        '& a': {
            textDecoration: 'none',
            fontSize: 14,
            color: '#fff',
            lineHeight: 1,
        }
    },
    closeIco: {
        cursor: 'pointer',
        '&:hover': {
            opacity: 0.5,
        }
    }

});

export default styles;