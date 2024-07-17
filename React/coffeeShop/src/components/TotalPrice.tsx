import React, { useState, useContext, useEffect } from 'react'
import { changesContext, coffeeContext } from '../layouts/DefaultLayout/DefaultLayout'
import '../styles/totalPrice.scss'

type Coffee = {
    name: string,
    description: string,
    id: number,
    category: Array<String>,
    price: number,
    src: string,
    value: number;
}

type ActualCoffee = {
    actualCoffee: Coffee;
}

export default function TotalPrice() {

    const [totalPrice, setTotalPrice] = useState(0);
    const [coffeeCart]: Coffee = useContext(coffeeContext)
    const [changesOnCoffee] = useContext(changesContext)
    const [price, setPrice] = useState(0)
    const [freight, setFreight] = useState(coffeeCart.length * 1.5);

    useEffect(() => {
        console.log("rendering useEffect")
        updatePrices()
        console.log(price, freight, totalPrice)
    }, [changesOnCoffee])

    function updatePrices() {
        setPrice(coffeeCart.reduce((acc: number, cur: Coffee) => acc + (cur.value * cur.price), 0))
        setFreight(coffeeCart.length * 1.5)
        setTotalPrice((coffeeCart.reduce((acc: number, cur: Coffee) => acc + (cur.value * cur.price), 0)) + freight)
    }

    return (
        <>
            {coffeeCart.length !== 0 &&
                <div className="totalItemsContainer">
                    <div className="totalItemsDiv textS">
                        <span>
                            Total de itens
                        </span>

                        <span>
                            R$ {price.toFixed(2)}
                        </span>
                    </div>
                    <div className="freightDiv textS">
                        <span>
                            Entrega
                        </span>
                        <span>
                            R$ {freight.toFixed(2)}
                        </span>
                    </div>
                    <div className="finalPriceDiv textL">
                        <span>
                            Total
                        </span>
                        <span>
                            R$ {totalPrice.toFixed(2)}
                        </span>
                    </div>
                </div>}
        </>
    )
}
