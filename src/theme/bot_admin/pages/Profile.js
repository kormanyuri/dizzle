

const styles = theme =>  ({
    headContent: {
        display: 'flex',
        alignItems: 'center',
        fontSize: 15,
        fontWeight: 'bold',
        color: '#fff',
        height: 77,
        marginBottom: 29,
    },
    avatar: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
    },
    wrapUpload: {
        position: 'relative',
        width: '77px !important',
        height: '77px',
        padding: 4,
        marginRight: 14,
        borderRadius: '50%',
        backgroundColor: 'rgba(255,255,255,0.2)'
    },
    uploadInput: {
        cursor: 'pointer',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        width: '100%',
        opacity: 0,
        zIndex: 100
    },
    instruction: {
        fontSize: 11,
        fontWeight: 'normal',
        color: '#fff',
        opacity: 0.4,
        width: 110,
    },
    titleForm: {
        marginBottom: 18,
        fontSize: 13,
        fontWeight: 500,
        textTransform: 'uppercase',
        color: '#fff',
    },
    button: {
        border: '1px solid rgba(255,255,255,0.2)',
        borderRadius: 3,
        width: '100%',
        padding: '12.5px 14px 12.5px 24px',
        marginBottom: 9,
        '& span': {

            color: '#b6ae9e',
            fontSize: 12,
            fontWeight: 500,
            justifyContent: 'left',
        },
        '&:after': {
            content: "''",
            height: 10,
            width: 6.13,
            backgroundImage: "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdmcyIiB2aWV3Qm94PSIwIDAgNi4xMzMyODU0IDkuOTk5OTk4OSIgaGVpZ2h0PSI5Ljk5OTk5ODkiIHdpZHRoPSI2LjEzMzI4NTQiPjxwYXRoIGlkPSJwYXRoNDIxOCIgZD0iTTEuMTcgMEMuOS0uMDA2LjYxOC4wOTIuMzk1LjMxNUwuMjgzLjQyN0MtLjA1Mi43NjItLjEwNyAxLjQzMi4zNCAxLjg4bDMuMTA2IDMuMTAzTC4zMTQgOC4xMTZjLS40NDYuNDQ3LS4zOSAxLjExNiAwIDEuNTA3bC4xMTIuMTEyYy4zMzUuMzM1IDEuMDA1LjM5IDEuNDUyLS4wNTZsMy45MS0zLjkxYy4wMjMtLjAyNC4wNC0uMDUuMDYzLS4wNzZsLjAxNy0uMDE3Yy4zMzYtLjMzNS4zOTItMS4wMDUtLjA1NC0xLjQ1MkwxLjkwMy4zMTVDMS43MS4xMiAxLjQ0NC4wMDggMS4xNyAweiIgZmlsbD0iI2I2YWU5ZSIvPjwvc3ZnPg==)",
            backgroundRepeat: 'no-repeat',
        },
    },
    formControl: {
        marginBottom: 30,
    }

});

export default styles;

