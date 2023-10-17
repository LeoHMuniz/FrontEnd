import styles from './Card.module.css'
export function Card(props) {

    return (
        <div className={styles.card}>
                <img
                    src={props.imgUrl}
                    alt=""
                />
                <h2 className={styles.title}>
                    {props.name}
                </h2>
                <p className={styles.description}>
                    {props.description}
                </p>
            </div>
    )

}