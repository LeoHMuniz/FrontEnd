import { useEffect, useState } from 'react'
import styles from './Forms.module.css'

export function Forms() {

    const [name, setName] = useState("")
    const [adress, setAdress] = useState("")
    const [description, setDescription] = useState("")
    const [coin, setCoin] = useState(false)

    function handleClick(e) {
        e.preventDefault()
        setName(nameInput.value)
        setAdress(adressInput.value)
        setDescription(messageInput.value)
        toggleCoin()
        eraseCamps()
    }

    function toggleCoin() {
        setCoin(!coin)
    }

    function eraseCamps() {
        nameInput.value = ""
        adressInput.value = ""
        messageInput.value = ""
    }

    return (
        <section className={styles.formsSection}>
            <form
                action="#">
                <div className={styles.formsSide}>
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" id="nameInput" />
                    <label htmlFor="adressInput">Adress</label>
                    <input type="text" id="adressInput" />
                    <label htmlFor="messageInput">Leave a message</label>
                    <textarea name="messageInput" id="messageInput" cols="30" rows="10"></textarea>

                    <a href="#"
                        className={styles.formsButton}
                        onClick={handleClick}
                    >Click on me!
                    </a>
                </div>
            </form>
            <div className={styles.resultSide}>
                {
                    coin ?
                        <div className={styles.resultsContainer}>
                            <p><b>Name:</b> {name} </p>
                            <p><b>Adress:</b> {adress} </p>
                            <p><b>Description:</b> {description} </p>
                        </div>
                        : ""
                }
            </div>
        </section>
    )

}