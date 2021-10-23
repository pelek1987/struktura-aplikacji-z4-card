import styles from './Card.module.scss';
import { CardHeader, CardImage, CardMain, CardFooter, CardMoreSection } from "./";

function Card({ data, handleClick, showMore }) {

    const {title, intro, content, date} = data;

    return (
        <div className={styles.Card}>
            <CardHeader title={title} date={date} />
            <CardImage />
            <CardMain intro={intro} />
            <CardFooter handleClick={handleClick} showMore={showMore} />
            <CardMoreSection content={content} showMore={showMore} />
        </div>
    );
}

export default Card;
