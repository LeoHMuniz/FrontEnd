import { useContext, useState } from 'react'
import { coffeeContext } from '../layouts/DefaultLayout/DefaultLayout'
import { Minus, Plus, Trash } from '@phosphor-icons/react'
import '../styles/selectedCoffee.scss'

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

export default function SelectedCoffees(coffee: Coffees, index: number) {

    const [coffeeCart, setCoffeeCart] = useContext(coffeeContext)
    const [coffeeActualValue, setCoffeeActualValue] = useState(coffee.coffee.value)
    const [coffeesRemoved, setCoffeesRemoved] = useState<Coffees>()

    function decideOnCoffee(symbol: string) {
        if (symbol === "minus" && coffeeActualValue - 1 === 0) {
            console.log("remove")
            setCoffeesRemoved(coffeeCart.splice(coffeeCart[coffee.coffee.id], 1))
        }
        if (symbol === "minus" && coffeeActualValue > 0) {
            subOnCoffee()
        }
        if (symbol === "plus") {
            sumOnCoffee()
        }
        else {
            return
        }
    }

    function sumOnCoffee() {
        // setCoffeeActualValue(coffeeActualValue + coffeePrice)
        setCoffeeActualValue(coffeeActualValue + 1)
    }

    function subOnCoffee() {
        // setCoffeeActualValue(coffeeActualValue - coffeePrice)
        setCoffeeActualValue(coffeeActualValue - 1)
    }

    return (
        <div className="selectedCoffeesContainer">
            <div className="reviewCardContainer">
                <div className="reviewCard">
                    <img
                        src={coffee.coffee.src}
                        alt=""
                    />
                    <div className="coffeeInfo">
                        <h4 className="textM coffeeTitle">{coffee.coffee.name}</h4>
                        <div className="buttonsContainer">
                            <div className="buttonInput">
                                <span className="symbols"><Minus size={14} weight="bold" onClick={() => decideOnCoffee("minus")} /></span>
                                <input type="number" readOnly className='textM' value={coffeeActualValue} />
                                <span className="symbols"><Plus size={14} weight="bold" onClick={() => decideOnCoffee("plus")} /></span>
                            </div>
                            <div className="buttonInput buttonRemoveContainer">
                                <Trash size={16} className="symbols" />
                                <span className="buttonM" onClick={() => console.log(coffeeCart)}>remover</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="priceContainer">
                    <span className="textM">
                        R$ {(coffee.coffee.price * coffeeActualValue).toFixed(2)}
                    </span>
                </div>
            </div>
            {coffee.coffee.id + 1 < coffeeCart.length ? <hr /> : ""}
        </div>
    )

}

