import { useContext, useState } from 'react'
import { changesContext, coffeeContext } from '../layouts/DefaultLayout/DefaultLayout'
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

export default function SelectedCoffees({ coffee }: Coffees, index: number) {

    const [coffeeCart, setCoffeeCart] = useContext(coffeeContext)
    const [changesOnCoffee, setChangesOnCoffee] = useContext(changesContext)
    const [coffeeActualValue, setCoffeeActualValue] = useState(coffee.value)


    function removingCoffee(location: number) {
        let removingCoffee = coffeeCart.filter(coffee => coffee.id !== location)

        setCoffeeCart(removingCoffee)
    }

    function decideOnCoffee(symbol: string, location: number) {
        if (symbol === "minus" && coffeeActualValue - 1 === 0) {
            let coffeesRemoved = coffeeCart.filter(coffee => coffee.id !== location)
            setCoffeeActualValue(coffeeActualValue)
            setCoffeeCart(coffeesRemoved)
        }
        if (symbol === "minus" && coffeeActualValue > 1) {
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
        coffee.value = coffeeActualValue + 1
        setChangesOnCoffee(changesOnCoffee + 1)
        setCoffeeActualValue(coffeeActualValue + 1)
    }

    function subOnCoffee() {
        coffee.value = coffeeActualValue - 1
        setChangesOnCoffee(changesOnCoffee + 1)
        setCoffeeActualValue(coffeeActualValue - 1)
    }

    return (
        <div className="selectedCoffeesContainer">
            <div className="reviewCardContainer">
                <div className="reviewCard">
                    <img
                        src={coffee.src}
                        alt=""
                    />
                    <div className="coffeeInfo">
                        <h4 className="textM coffeeTitle">{coffee.name}</h4>
                        <div className="buttonsContainer">
                            <div className="buttonInput">
                                <span className="symbols"><Minus size={14} weight="bold" onClick={() => decideOnCoffee("minus", coffee.id)} /></span>
                                <input type="number" readOnly className='textM' value={coffeeActualValue} />
                                <span className="symbols"><Plus size={14} weight="bold" onClick={() => decideOnCoffee("plus", coffee.id)} /></span>
                            </div>
                            <div className="buttonInput buttonRemoveContainer">
                                <Trash size={16} className="symbols" />
                                <span className="buttonM" onClick={() => removingCoffee(coffee.id)}>remover</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="priceContainer">
                    <span className="textM">
                        R$ {(coffee.price * coffeeActualValue).toFixed(2)}
                    </span>
                </div>
            </div>
            {coffee.id < coffeeCart.length ? <hr /> : ""}
        </div>
    )

}

