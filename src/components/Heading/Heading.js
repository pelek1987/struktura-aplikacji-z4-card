const fontSizes = {
    sm: 16,
    md: 20,
    lg: 24,
}

function Heading({ title, size }) {

    const styles = {
        fontWeight: 400,
        fontSize: fontSizes[size],
        margin: 10
    }

    return (
        <h1 style={styles}>
            {title}
        </h1>
    );
}

export default Heading;
