import styles from './Card.module.scss';

function CardIcon({ label }) {
    return (
        <div className={styles.CardIcon}>
            {label}
        </div>
    );
}

export default CardIcon;
