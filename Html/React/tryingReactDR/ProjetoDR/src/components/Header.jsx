import styles from './Header.module.css'
import logo from '../assets/logo.svg'
export function Header() {
    return (
            <header className={styles.header}>
                <img
                    src={logo}
                    alt="Logo da empresa"
                />
                <ul className={styles.list}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">House</a></li>
                    <li><a href="#">Ie</a></li>
                    <li><a href="#">Casa</a></li>
                </ul>
            </header>
    )
}