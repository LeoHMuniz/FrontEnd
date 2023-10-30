import styles from './Side.module.css'
export function Side(){
    return(
        <aside className={styles.sideContainer}>
            <main>
            <div className={styles.sideData}>
                <img 
                src="" 
                alt="" 
                />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa libero et incidunt reprehenderit ex, nemo vitae eum aliquam delectus inventore totam! Nesciunt quo voluptatibus voluptate alias, atque exercitationem consequuntur perferendis.
                </p>
            </div>
            <footer className={styles.sideFooter}>
                <a 
                href="">
                </a>

                <a 
                href="">
                </a>
                <p>
                    Alguma groselha aí
                </p>
            </footer>
            </main>
        </aside>

    )
}