function Date({ date }) {

    const styles = {
        margin: 10,
        color: '#00000099'
    }

    return (
        <p style={styles}>
            { date }
        </p>
    );
}

export default Date;
