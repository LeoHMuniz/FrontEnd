import React, { useContext, useState } from 'react'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import { coffeeContext } from '../../layouts/DefaultLayout/DefaultLayout'
import _ from "lodash";
type Coffees = {
    coffee: Coffee
}

type Coffee = {
    name: string,
    description: string,
    id: number,
    category: string,
    price: number
    src: string
    value: number
}

export default function CoffeeCounter({ coffee }: Coffees) {


    const [coffeeCart, setCoffeeCart] = useContext(coffeeContext)
    const [coffeeActualValue, setCoffeeActualValue] = useState(coffeeCart[coffee.id]?.value)
    const [coffeesRemoved, setCoffeesRemoved] = useState<Coffees>([])

    function decideOnCoffee(symbol: string, coffeeLocation: number) {
        if (symbol === "minus" && coffeeActualValue - 1 === 0) {
            console.log(coffeeActualValue)
            setCoffeesRemoved(coffeeCart.splice(coffeeCart[coffeeLocation], 1))

        }
        if (symbol === "minus" && coffeeActualValue > 1) {
            subOnCoffee(coffeeLocation)
        }
        if (symbol === "plus") {
            sumOnCoffee(coffeeLocation)
        }
        else {
            return
        }
    }

    function sumOnCoffee(coffeeLocation: number) {
        setCoffeeActualValue(coffeeActualValue + 1)
        console.log(coffeeCart[coffeeLocation])
    }

    function subOnCoffee(coffeeLocation: number) {
        setCoffeeActualValue(coffeeActualValue - 1)
        console.log(coffeeCart[coffeeLocation])
    }


    return (
        <>
            <div className="buttonInput">
                <span className="symbols"><Minus size={14} weight="bold" onClick={() => decideOnCoffee("minus", coffee.id)} /></span>
                <input type="number" readOnly className='textM' value={coffeeActualValue} />
                <span className="symbols"><Plus size={14} weight="bold" onClick={() => decideOnCoffee("plus", coffee.id)} /></span>
            </div>
            <div className="buttonInput buttonRemoveContainer">
                <Trash size={16} className="symbols" />
                <span className="buttonM" onClick={() => console.log(coffeeCart)}>remover</span>
            </div>
        </>

    )
}
