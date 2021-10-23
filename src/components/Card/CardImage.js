import styles from './Card.module.scss';
import image from 'assets/images/paella.jpg';

function CardImage() {

    return (
        <div className={styles.CardImage}>
            <img src={image} alt="card img"/>
        </div>
    );
}

export default CardImage;
