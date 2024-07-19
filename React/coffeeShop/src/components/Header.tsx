import { useContext, useEffect, useState } from 'react'
import coffeeDelivery from '../assets/coffeeDelivery.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import '../styles/headerStyles.scss';
import { Link } from 'react-router-dom';
import { changesContext, coffeeContext } from '../layouts/DefaultLayout/DefaultLayout';

export default function Header() {

  type Coffee = {
    name: string,
    description: string,
    id: number,
    category: Array<String>,
    price: number,
    src: string,
    value: number;
  }

  const [coffeeCart] = useContext(coffeeContext);
  const [changesOnCoffee] = useContext(changesContext)
  const [itemsOnCart, setItemsOnCart] = useState(0);
  let result = 0

  useEffect(() => {
    result = + coffeeCart.reduce((acc: number, cur: Coffee) => acc + cur.value, 0)
    setItemsOnCart(result)
  }, [changesOnCoffee])

  return (
    <section className="headerSection">
      <header>
        <Link to={{ pathname: "/", state: coffeeCart }}>
          <img
            src={coffeeDelivery}
            alt="Brand's logo"
          />
        </Link>
        <div className="cartDiv">
          <div className="locationDiv">
            <MapPin size={22} weight="fill" />
            <span className="textS">São Paulo, SP</span>
          </div>
          <div className="shoppingCart">
            <div className="items textS"><span>{itemsOnCart}</span></div>
            <Link to={{ pathname: "/checkout", state: coffeeCart }}>
              <ShoppingCart size={22} weight="fill" />
            </Link>
          </div>
        </div>
      </header>

    </section>
  )
}
