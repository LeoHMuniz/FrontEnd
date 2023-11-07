import styles from './Rodape.module.css'
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


export function Rodape() {

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

    return (
        <>
        <div className={styles.imgContainer}>
            <a href={first}><img
                src={firstThumb}
                alt="The head image"
            />
            </a>

            {
                imgs.map(img => {
                    return (
                        <a href={img.imgUrl} key={img.id}>
                            <img
                                src={img.imgShown}
                                alt={img.description}
                            />
                        </a>
                    )
                })
            }

        </div>
        <footer>
           <p className={styles.right}>
            <img 
            src="" 
            alt="" 
            /> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia neque ex inventore quae animi porro delectus nesciunt voluptatum recusandae, praesentium dicta! Corrupti ut id dolor molestias error quod? Ad, laboriosam.
           </p>
           <p className={styles.left}>
            <img 
            src="" 
            alt="" 
            /> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia voluptate culpa laborum! Inventore ad ullam, magni minus hic obcaecati blanditiis quibusdam et voluptatum molestias reprehenderit quia accusantium non repellendus necessitatibus.
           </p>
        </footer>
        </>
        )
}