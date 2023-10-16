import styles from './Carroussel.module.css'
export function Carroussel() {

    return (

        <div className={styles.carroussel}>
            <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <img src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGxvZ298ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <span className={styles.before}>
                &#8592;
            </span>
            <span className={styles.after}>
                &#8594;
            </span>
        </div>

    )
}