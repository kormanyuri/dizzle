let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


const styles = ({
    root: {
        minHeight: 'inherit',
        padding: '100px 15px 44px',
        '&>div:last-child div': {
            marginBottom: 0
        },
        fontSize: '25px'
    },
});

export default styles;