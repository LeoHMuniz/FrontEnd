import React from 'react'
import bigCoffee from '../assets/bigCoffee.svg'
import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from '@phosphor-icons/react'
import "../styles/homeStyles.scss"
import Market from './Market'

export default function Home() {
  return (
    <>
      <section className="faceSection">
        <div className="introductionDiv">
          <div>
            <h1 className="titleXl">Encontre o café perfeito para qualquer hora do dia</h1>
            <p className="textL">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            <div className="instructionsDiv">
              <div className="leftDivs">
                <ShoppingCart size={16} className="icon cartIcon" weight="fill" />
                <p className="textM">Compra simples e segura</p>
              </div>
              <div className="rightDivs">
                <Package size={16} className="icon packageIcon" weight="fill" />
                <p className="textM">Embalagem mantém o café intacto</p></div>
              <div className="leftDivs">
                <Timer size={16} className="icon timerIcon" weight="fill" />
                <p className="textM">Entrega rápida e rastreada</p>
              </div>
              <div className="rightDivs">
                <Coffee size={16} className="icon coffeeIcon" weight="fill" />
                <p className="textM">O café chega fresquinho até você</p>
              </div>
            </div>
          </div>
          <img
            className="bigCoffee"
            src={bigCoffee}
            alt="A big cup of coffee!"
          />
        </div>
        <Market />
      </section>
    </>
  )
}
