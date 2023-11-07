import styles from './Tables.module.css'

export function Tables() {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9]

    const secondList = [1, 2]

    const socialMedia = ['facebook', 'X', 'youtube', 'instagram', 'amazon']

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
            <pre>
                var j = "Hello";
                var k = "world";

                print(j+k);
                Hello world
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
                                <li>Linha{itens}</li>

                            )
                        })

                    }
                </ol>

                <ul className={styles.socialMediaList}>
                    {
                        socialMedia.map(icons => {
                            return (
                                <li>{icons}</li>
                            )
                        })
                    }

                </ul>


            </div>

            <div className={styles.buttonContainer}>
                <button className={styles.normalButton}>Oi</button>
                <button className={`${styles.normalButton} ${styles.green}`}>Tchau</button>
                <button className={styles.bigButton}>Oizão</button>
                <button className={`${styles.bigButton} ${styles.red}`}>Tchauzão</button>
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