import styles from './Sidebar.module.css'

export function Sidebar() {
    return (
        <aside className={styles.sidebar}>
            <img
                className={styles.cover}
                src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
            />
            <div className={styles.profile}>
                <img
                    className={styles.avatar}
                    src="https://media.licdn.com/dms/image/D4D35AQE3EZJr6AEm7A/profile-framedphoto-shrink_200_200/0/1688090033541?e=1697590800&v=beta&t=dNRxh2eu7kqrS_NVcpJVR5rEQgLeXsTwyGSsJf8U9BA"
                    alt="Foto do Ucla!"
                />
                <strong>Ucla</strong>
                <span>Web Developer</span>
            </div>
            <footer>
                <a href="">
                    Editar seu perfil
                </a>
            </footer>

        </aside>
    )
}