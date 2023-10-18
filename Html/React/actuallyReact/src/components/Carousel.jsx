import { useState } from "react"
import styles from './Carousel.module.css'

export function Carousel() {
    const [choice, setChoice] = useState(null);

    const [newClass, setNewClass] = useState(false);



    function handleChoice(e){
        setChoice(e.target.src)

    }

    function handleClass(e){
        setNewClass(current => !current)
    }


    const images = [{
        id: 1,
        imageUrl: 'https://images.unsplash.com/photo-1696312868790-a259aeccaa14?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id: 2,
        imageUrl: 'https://images.unsplash.com/photo-1697432906373-ac234aa00dff?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D'
    },

    {
        id: 3,
        imageUrl: 'https://images.unsplash.com/photo-1682685796063-d2604827f7b3?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D'
    }]

    return (
        <><div className={styles.carouselContainer}>
            {images.map(image => {
                return (
                    <div className={styles.imgContainer} 
                    key={image.id}
                    onClick={handleClass}>
                        <img src={image.imageUrl}
                            alt=""
                            onClick={handleChoice}
                        />
                    </div>
                )
            })}</div>
                <div className={styles.chosen}>
                <img 
                        src={choice}
                        alt=""
                         />
            </div>
                    
        </>
    )

}