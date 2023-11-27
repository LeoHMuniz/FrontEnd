import styles from './Tables.module.css'
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoAmazon } from "react-icons/io5";
import { BsFacebook } from "react-icons/bs";

export function Tables() {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const secondList = [1, 2]

    const socialMedia = [{
        name: 'facebook',
        url: 'https://pt-br.facebook.com',
        icon: <BsFacebook />
    }, {
        name: 'X',
        url: 'https://twitter.com/?lang=pt-br',
        icon: <FaXTwitter />
    }, {
        name: 'youtube',
        url: 'https://www.youtube.com',
        icon: <FaYoutube />
    }, {
        name: 'instagram',
        url: 'https://www.instagram.com',
        icon: <AiFillInstagram />
    }, {
        name: 'amazon',
        url: 'https://www.amazon.com.br',
        icon: <IoLogoAmazon />
    }]

    const itemsOnTable = [
        {
            id: 1,
            item: 'item one',
            description: 'Ta em latim',
            price: 21.99
        },
        {
            id: 2,
            item: 'item two',
            description: 'Ta em latim',
            price: 22.99
        },
        {
            id: 3,
            item: 'item three',
            description: 'Ta em latim',
            price: 23.99
        },
    ]



    return (
        <section className={styles.tablesContainer}>
            <h3>Elements</h3>
            <p>this is <b>bold</b>, this is <strong>strong</strong>, this is <i>italic</i>, this is <sup>superscript</sup>, this is <sub>subscript</sub>, this is <u>underline</u>, this is <code>a code</code> and finally, this is a <a href="#">link!</a></p>

            <blockquote>Garçom... Aqui, nesta mesa de bar; Você já cansou de escutar! Centenas, de casos de amor.</blockquote>
            <h4>Preformated</h4>
            <pre className={styles.tablesPre}>
                <code>
                    <p>oi():</p>
                    <p>var j = "Hello";</p>
                    <p>var k = "world";</p>
                    <p>print(j+k);</p>
                    <p>oi()</p>
                </code>
            </pre>
            <div className={styles.listContainer}>
                {
                    secondList.map(numbers => {
                        return (<ul key={numbers} className={styles.unorganizedList}>
                            {

                                list.map(itens => {
                                    return (
                                        <li>Linha{itens}</li>

                                    )
                                })

                            }
                        </ul>)
                    })}

                <ol className={styles.organizedList}>
                    {

                        list.map(itens => {
                            return (
                                <li>Linha{`${itens}`}</li>

                            )
                        })

                    }
                </ol>

                <ul className={styles.socialMediaList}>
                    {
                        socialMedia.map(icons => {
                            return (
                                <li className={styles.socialIcons}>{icons.icon}</li>
                            )
                        })
                    }

                </ul>


            </div>

            <div className={styles.buttonContainer}>
                <div className={styles.firstContainer}>
                    <button className={styles.normalButton}>Oi</button>
                    <button className={`${styles.normalButton} ${styles.green}`}>Tchau</button>
                </div>
                <div className={styles.secondContainer}>
                    <button className={styles.bigButton}>Oizão</button>
                    <button className={`${styles.bigButton} ${styles.red}`}>Tchauzão</button>
                </div>
            </div>

            <h4>Table</h4>
            <table className={styles.actualTable}>
                <caption>Default</caption>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemsOnTable.map(items => {
                            return (
                                <tr key={items.id}>
                                    <td>{items.item}</td>
                                    <td>{items.description}</td>
                                    <td>{items.price}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </section>
    )
}