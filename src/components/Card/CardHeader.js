import styles from "./Card.module.scss";
import CardIcon from "./CardIcon";
import Heading from "components/Heading";
import Date from "components/Date";

function CardHeader({ title, date }) {
    return (
        <section className={styles.CardHeader}>
            <CardIcon label={'R'} />
            <div>
                <Heading size={'md'} title={title} />
                <Date date={date} />
            </div>
        </section>
    );
}

export default CardHeader;
