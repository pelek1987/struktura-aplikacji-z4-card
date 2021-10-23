import styles from './Card.module.scss';

function CardMain({ intro }) {
    return (
        <div className={styles.CardMain}>
            <p>{ intro }</p>
        </div>
    );
}

export default CardMain;
