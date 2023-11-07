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
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis temporibus odio veritatis at, beatae consectetur rem modi doloremque expedita recusandae facilis adipisci quaerat repudiandae? Dolore doloribus accusamus veritatis recusandae blanditiis?
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