import { useContext, useState } from 'react'
import { coffeeContext } from '../../layouts/DefaultLayout/DefaultLayout'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import '../styles/selectedCoffee.scss'
import CoffeeCounter from './CoffeeCounter'

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

export default function TrySelectedCoffees({coffees}:Coffees) {

    const [coffeeCart, setCoffeeCart] = useContext(coffeeContext)
    const [coffeeActualValue, setCoffeeActualValue] = useState(0)
    const [coffeesRemoved, setCoffeesRemoved] = useState<Coffees>()

    // function decideOnCoffee(symbol: string, coffeeLocation: number) {
    //     if (symbol === "minus" && coffeeCart[coffeeLocation].value - 1 === 0) {
    //         console.log("remove")
    //         setCoffeesRemoved(coffeeCart.splice(coffeeCart[coffeeLocation], 1))

    //     }
    //     if (symbol === "minus" && coffeeCart[coffeeLocation]?.value > 0) {
    //         subOnCoffee(coffeeLocation)
    //     }
    //     if (symbol === "plus") {
    //         sumOnCoffee(coffeeLocation)
    //     }
    //     else {
    //         return
    //     }
    // }

    // function sumOnCoffee(coffeeLocation: number) {
    //     setCoffeeActualValue(coffeeCart[coffeeLocation].value + 1)
    //     coffeeCart[coffeeLocation].value = coffeeCart[coffeeLocation].value + 1
    //     console.log(coffeeCart[coffeeLocation])
    // }

    // function subOnCoffee(coffeeLocation: number) {
    //     setCoffeeActualValue(coffeeCart[coffeeLocation].value - 1)
    //     coffeeCart[coffeeLocation].value = coffeeCart[coffeeLocation].value - 1
    // }

    return (

        coffees.map((actualCoffee: Coffee, index: number) => {
            return (
                <div className="selectedCoffeesContainer" key={index}>
                    <div className="reviewCardContainer">
                        <div className="reviewCard">
                            <img
                                src={actualCoffee.src}
                                alt=""
                            />
                            <div className="coffeeInfo">
                                <h4 className="textM coffeeTitle">{actualCoffee.name}</h4>
                                <div className="buttonsContainer">

                                    <CoffeeCounter coffee={actualCoffee} />
                                    {/* <div className="buttonInput">
                                        <span className="symbols"><Minus size={14} weight="bold" onClick={() => decideOnCoffee("minus", actualCoffee.id)} /></span>
                                        <input type="number" readOnly className='textM' value={coffeeActualValue === 0 ? coffeeCart[actualCoffee.id].value : coffeeActualValue} />
                                        <span className="symbols"><Plus size={14} weight="bold" onClick={() => decideOnCoffee("plus", actualCoffee.id)} /></span>
                                    </div> 
                                    <div className="buttonInput buttonRemoveContainer">
                                        <Trash size={16} className="symbols" />
                                        <span className="buttonM" onClick={() => console.log(coffeeCart)}>remover</span>
                                    </div>
                                    */}
                                </div>
                            </div>
                        </div>
                        <div className="priceContainer">
                            <span className="textM">
                                R$ {(actualCoffee.price * actualCoffee.value).toFixed(2)}
                            </span>
                        </div>
                    </div>
                    {actualCoffee.id + 1 < coffees.length ? <hr /> : ""}
                </div>
            )
        })


    )
}

