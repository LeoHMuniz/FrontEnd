import styles from './Head.module.css'
import first from '../assets/fulls/01.jpg'
import second from '../assets/fulls/02.jpg'
import third from '../assets/fulls/03.jpg'
import fourth from '../assets/fulls/04.jpg'
import fifth from '../assets/fulls/05.jpg'
import sixth from '../assets/fulls/06.jpg'

import firstThumb from '../assets/thumbs/01.jpg'
import secondThumb from '../assets/thumbs/02.jpg'
import thirdThumb from '../assets/thumbs/03.jpg'
import fourthThumb from '../assets/thumbs/04.jpg'
import fifthThumb from '../assets/thumbs/05.jpg'
import sixthThumb from '../assets/thumbs/06.jpg'

export function Head() {


    const imgs = [{
        id: 1,
        imgUrl: first,
        description: 'The first image',
        imgShown: firstThumb
    }, {
        id: 2,
        imgUrl: second,
        description: 'The second image',
        imgShown: secondThumb
    }, {
        id: 3,
        imgUrl: third,
        description: 'The third image',
        imgShown: thirdThumb
    }, {
        id: 4,
        imgUrl: fourth,
        description: 'The fourth image',
        imgShown: fourthThumb
    }, {
        id: 5,
        imgUrl: fifth,
        description: 'The fifth image',
        imgShown: fifthThumb
    }, {
        id: 6,
        imgUrl: sixth,
        description: 'The sixth image',
        imgShown: sixthThumb
    }]

    console.log(imgs[0].imgShown)

    return (
        <section className={styles.headSection}>
            <h2 className={styles.headTitle}>Quando o Header é aside e o aside é o header</h2>

            <p>Mussum Ipsum, cacilds vidis litro abertis. Cevadis im ampola pa arma uma pindureta.Mais vale um bebadis conhecidiss, que um al</p>

            <a href="#" className={styles.standardButton} title='Click me'>Click me!</a>

            <h2>Trabalhos recentes</h2>
            
            <div className={styles.cardContainer}>
                {
                    imgs.map(img => {
                        return (
                            <div className={styles.card} key={img.id}>
                                <h2 className={styles.cardTitle}>Título de cada card</h2>
                                <p className={styles.cardsP}>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                                <a href={img.imgUrl}>
                                    <img
                                        src={img.imgShown}
                                        alt={img.description}
                                    /></a>
                            </div>
                        )
                    })

                }
            </div>

            <a href="#" className={styles.standardButton} title='Portifolio'>Portifólio completo!</a>

        </section>
    )
}