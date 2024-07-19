import { Minus, Plus, ShoppingCartSimple } from '@phosphor-icons/react'
import { useState, useContext } from 'react'
import { changesContext, coffeeContext } from '../layouts/DefaultLayout/DefaultLayout'
import "../styles/marketStyles.scss"

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


export default function PurchaseContainer({ actualCoffee }: ActualCoffee) {

    const [actualValue, setActualValue] = useState(0);
    const [actualPrice, setActualPrice] = useState(0);
    const [coffeeCart, setCoffeeCart] = useContext<Array<Coffee>>(coffeeContext)
    const [changesOnCoffee, setChangesOnCoffee] = useContext(changesContext)

    function decideOnCoffee(symbol: string) {
        if (symbol === "minus" && actualValue > 0) {
            subOnCoffee(actualCoffee.price)
        }
        if (symbol === "plus") {
            sumOnCoffee(actualCoffee.price)
        }
        else {
            return
        }
    }

    function sumOnCoffee(coffeePrice: number) {
        setActualPrice(actualPrice + coffeePrice)
        setActualValue(actualValue + 1)
    }

    function subOnCoffee(coffeePrice: number) {
        setActualPrice(actualPrice - coffeePrice)
        setActualValue(actualValue - 1)
    }

    function updateCart(coffeeProps: Coffee) {
        coffeeProps.value = actualValue
        setChangesOnCoffee(changesOnCoffee + 1)
        setCoffeeCart((prevstate: Coffee) => [...prevstate, coffeeProps])
    }


    return (

        <div
            key={actualCoffee.id}
            className="coffeeCard">
            <img
                src={actualCoffee.src}
                alt=""
            />
            <div>
                <div className="categoryContainer">
                    {actualCoffee.category.map((category: String, index: number) => {
                        return (
                            <span
                                className="tag"
                                key={index}>{category}
                            </span>
                        )
                    })}
                </div>
                <h3 className="titleS">{actualCoffee.name}</h3>
                <p className="textS">{actualCoffee.description}</p>
            </div>
            <div>
                <div className="purchaseContainer">
                    <span className="textS">R$ <b className="titleM">{actualPrice == 0 ? "9.90" : actualPrice.toFixed(2)}</b></span>
                    <div className="buttonContainer">
                        <div className="textM buttonInput">
                            <span><Minus size={12} weight="bold" onClick={() => decideOnCoffee("minus")} /></span>
                            <input type="number" readOnly value={actualValue} className='textM' />
                            <span><Plus size={12} weight="bold" onClick={() => decideOnCoffee("plus")} /></span>
                        </div>
                        <a className="button" onClick={() => updateCart(actualCoffee)}>
                            <ShoppingCartSimple size={22} className="icon cartIcon" weight="fill" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
