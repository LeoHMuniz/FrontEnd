import { useContext, useState } from 'react'
import coffeeDelivery from '../assets/coffeeDelivery.svg'
import { MapPin, ShoppingCart } from "@phosphor-icons/react";
import '../styles/headerStyles.scss';
import { Link } from 'react-router-dom';
import { coffeeContext } from '../layouts/DefaultLayout/DefaultLayout';

export default function Header() {

  const [coffeeCart, setCoffeeCart] = useContext(coffeeContext);
  const [itemsOnCart, setItemsOnCart] = useState(0);

  

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
            <span className="textS">Porto Alegre, RS</span>
          </div>
          <div className="shoppingCart">
            <Link to={{ pathname: "/checkout", state: coffeeCart }}>
              <ShoppingCart size={22} weight="fill" />
            </Link>
          </div>
        </div>
      </header>

    </section>
  )
}
