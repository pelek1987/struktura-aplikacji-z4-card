import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { library } from "@fortawesome/fontawesome-svg-core";
import styles from './Card.module.scss';

library.add(fas);

function CardFooter({ handleClick, showMore }) {

    return (
        <section className={styles.CardFooter}>
            <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={'heart'} />
            <FontAwesomeIcon className={styles.FontAwesomeIcon} icon={'share-alt'} />
            <FontAwesomeIcon onClick={handleClick} className={[styles.FontAwesomeIcon, `${showMore ? styles.FontAwesomeIconRotated : ''}`].join(' ')} icon={showMore ? 'angle-up' : 'angle-down'} />
        </section>
    )
}

export default CardFooter;
