
let width=window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

let scrollHeight = Math.max(
    document.body.scrollHeight, document.documentElement.scrollHeight,
    document.body.offsetHeight, document.documentElement.offsetHeight,
    document.body.clientHeight, document.documentElement.clientHeight
);


const styles = ({
    root: {
        padding: '100px 15px 44px',
        minHeight: scrollHeight,
        '&>div:last-child div': {
            marginBottom: 0
        }
    },
});

export default styles;