import React, { ReactElement } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'
import '../../styles/defaultLayout.scss'
import { useState } from 'react'

type Coffee = {
    name: string,
    description: string,
    id: number,
    category: Array<String>,
    price: number,
    src: string,
    value: number;
}

const coffeesOncart: Array<Coffee> = []
const paymentMethod: string = ""
const changesInContext: number = 0

export const coffeeContext = React.createContext();
export const methodContext = React.createContext();
export const changesContext = React.createContext();

export const DefaultLayout = ({ children }: ReactElement) => {
    const [coffeeCart, setCoffeeCart] = useState(coffeesOncart)
    const [method, setMethod] = useState(paymentMethod)
    const [changes, setChanges] = useState(changesInContext)

    return (
        <changesContext.Provider value={[changes, setChanges]} >
            <coffeeContext.Provider value={[coffeeCart, setCoffeeCart]}>
                <methodContext.Provider value={[method, setMethod]}>

                    <div className="DefaultLayout">
                        <Header />
                        <Outlet />
                    </div>

                </methodContext.Provider>
            </coffeeContext.Provider>
        </changesContext.Provider>
    )

}
export default DefaultLayout;
