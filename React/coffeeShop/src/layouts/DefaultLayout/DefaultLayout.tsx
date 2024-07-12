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


export const coffeeContext = React.createContext();
export const methodContext = React.createContext();

export const DefaultLayout = ({ children }: ReactElement) => {
    const [coffeeCart, setCoffeeCart] = useState(coffeesOncart)
    const [method, setMethod] = useState(paymentMethod)

    return (
        <coffeeContext.Provider value={[coffeeCart, setCoffeeCart]}>
            <methodContext.Provider value={[method, setMethod]}>

                <div className="DefaultLayout">
                    <Header />
                    <Outlet />
                </div>

            </methodContext.Provider>
        </coffeeContext.Provider>
    )

}
export default DefaultLayout;
