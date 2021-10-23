import styles from './Card.module.scss';

function CardMoreSection({ content, showMore }) {
    return (
        <div className={[styles.CardMoreSection, `${showMore ? styles.CardMoreSectionOutspread : ''}` ].join(' ')}>
            <p>
                { content }
            </p>
        </div>
    );
}

export default CardMoreSection;
