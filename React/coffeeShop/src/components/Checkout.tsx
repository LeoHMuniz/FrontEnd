import "../styles/checkout.scss"
import FormsContainer from './FormsContainer';
import PaymentContainer from './PaymentContainer';
import { coffeeContext, infoContext, methodContext } from '../layouts/DefaultLayout/DefaultLayout'
import { useContext } from 'react'
import SelectedCoffees from "./SelectedCoffees";
import TotalPrice from "./TotalPrice";
import { Link } from "react-router-dom";


export default function Checkout() {

  type Coffee = {
    name: string,
    description: string,
    id: number,
    category: string,
    price: number
    src: string
    value: number
  }

  const [coffeeCart] = useContext(coffeeContext)
  const [method] = useContext(methodContext)
  const [clientInformations] = useContext(infoContext);

  return (
    <section className="checkoutSection">
      <div className="completeDiv">
        <h4 className="titleXS">Complete seu pedido</h4>
        <div className="dataContainer">
          <FormsContainer />
          <PaymentContainer />
        </div>
      </div>
      <div className="coffeeDiv">
        <h4 className="titleXS">Cafés selecionados</h4>
        <div className="coffeeContainer">
          <div className="coffeesContainer">
            {coffeeCart.map((coffee: Coffee, index: number) => {
              return (
                <SelectedCoffees coffee={coffee} key={index} />
              )
            })}
          </div>
          <div className="priceContainer">
            <TotalPrice />
          </div>
          <div className="confirmButton">
            <Link to={{ pathname: "/confirm", state: [method, clientInformations]}} className="buttonG">
              Confirmar pedido
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
