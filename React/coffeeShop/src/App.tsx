import React, { Children } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Checkout from './components/Checkout'
import Success from './components/Success'
import Home from './components/Home'
import DefaultLayout from './layouts/DefaultLayout/DefaultLayout'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="" element={<Home />} />
                    <Route path="checkout" element={<Checkout />} />
                    <Route path="confirm" element={<Success />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
