import './types/Coffee'
import coffeeCoffee from "../assets/coffeeCoffee.svg"
import americanCoffee from "../assets/americanCoffee.svg"
import arabicCoffee from "../assets/arabicCoffee.svg"
import capuccinoCoffee from "../assets/capuccinoCoffee.svg"
import coldCoffee from "../assets/coldCoffee.svg"
import creamCoffee from "../assets/creamCoffee.svg"
import cubanCoffee from "../assets/cubanCoffee.svg"
import hawaiiCoffee from "../assets/hawaiiCoffee.svg"
import hotChocolate from "../assets/hotChocolate.svg"
import irishCoffee from "../assets/irishCoffee.svg"
import latteCoffee from "../assets/latteCoffee.svg"
import milkCoffee from "../assets/milkCoffee.svg"
import mocaccinoCoffee from "../assets/mocaccinoCoffee.svg"

import "../styles/marketStyles.scss"
import PurchaseContainer from './PurchaseContainer'

export default function Market() {

    type Coffee = {
        name: string,
        description: string,
        id: number,
        category: Array<String>,
        price: number,
        src: string,
        value: number;
    }

    const coffeeList: Array<Coffee> = [
        {
            id: 0,
            name: "Expresso Tradicional",
            description: "O tradicional café feito com água quente e grãos moídos",
            category: ["tradicional"],
            price: 9.90,
            src: coffeeCoffee,
            value: 0,
        },
        {
            id: 1,
            name: "Expresso Americano",
            description: "Expresso diluído, menos intenso que o tradicional",
            category: ["tradicional"],
            price: 9.90,
            src: americanCoffee,
            value: 0,
        },
        {
            id: 2,
            name: "Expresso Cremoso",
            description: "Café expresso tradicional com espuma cremosa",
            category: ["tradicional"],
            price: 9.90,
            src: creamCoffee,
            value: 0,
        },
        {
            id: 3,
            name: "Expresso Gelado",
            description: "Bebida preparada com café expresso e cubos de gelo",
            category: ["tradicional", "gelado"],
            price: 9.90,
            src: coldCoffee,
            value: 0,
        },
        {
            id: 4,
            name: "Café com Leite",
            description: "Meio a meio de expresso tradicional com leite vaporizado",
            category: ["tradicional", "com leite"],
            price: 9.90,
            src: milkCoffee,
            value: 0,
        },
        {
            id: 5,
            name: "Latte",
            description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
            category: ["tradicional", "com leite"],
            price: 9.90,
            src: latteCoffee,
            value: 0,
        },
        {
            id: 6,
            name: "Capuccino",
            description: "Bebida com canela feita de doses iguais de café, leite e espuma",
            category: ["tradicional", "com leite"],
            price: 9.90,
            src: capuccinoCoffee,
            value: 0,
        },
        {
            id: 7,
            name: "Mocaccino",
            description: "Café expresso com calda de chocolate, pouco leite e espuma",
            category: ["tradicional", "com leite"],
            price: 9.90,
            src: mocaccinoCoffee,
            value: 0,
        },
        {
            id: 8,
            name: "Chocolate quente",
            description: "Bebida feita com chocolate dissolvido no leite quente e café",
            category: ["especial", "com leite"],
            price: 9.90,
            src: hotChocolate,
            value: 0,
        },
        {
            id: 9,
            name: "Cubano",
            description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
            category: ["especial", "alcoólico", "gelado"],
            price: 9.90,
            src: cubanCoffee,
            value: 0,
        },
        {
            id: 10,
            name: "Havaiano",
            description: "Bebida adocicada preparada com café e leite de coco",
            category: ["especial"],
            price: 9.90,
            src: hawaiiCoffee,
            value: 0,
        },
        {
            id: 11,
            name: "Árabe",
            description: "Bebida preparada com grãos de café árabe e especiarias",
            category: ["especial"],
            price: 9.90,
            src: arabicCoffee,
            value: 0,
        },
        {
            id: 12,
            name: "Irlandês",
            description: "Bebida a base de café, uísque irlandês, açúcar e chantily",
            category: ["especial", "alcoólico"],
            price: 9.90,
            src: irishCoffee,
            value: 0,
        },

    ]

    return (
        <section className="marketSection">
            <h2 className="titleL">
                Nossos cafés
            </h2>
            <div className="cardContainer">
                {
                    coffeeList.map((actualCoffee: Coffee, index: number) => {
                        return (
                            <PurchaseContainer key={index} actualCoffee={actualCoffee} />

                        )
                    })
                }
            </div>
        </section>
    )
}
