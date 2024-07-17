import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import { coffeeContext, methodContext } from '../layouts/DefaultLayout/DefaultLayout'
import { useContext } from 'react'

export default function PaymentContainer() {

    type Methods = {
        id: number,
        value: string,
        name: string,
        icon: any
    }

    const [method, setMethod]:Methods | any = useContext(methodContext);

    const methodList = [{
        id: 0,
        name: "Cartão de crédito",
        value: "creditCard",
        icon: <CreditCard size={16} className="paymentIcon" />,
    },
    {
        id: 1,
        name: "Cartão de débito",
        value: "debitCard",
        icon: <Bank size={16} className="paymentIcon" />,
    }, 
    {
        id: 2,
        name: "Dinheiro",
        value: "money",
        icon: <Money size={16} className="paymentIcon" />,
    }
    ]

    function selectPaymentMethod(method: string) {
        setMethod(method);
    }

    return (
        <div className="paymentContainer">
            <header>
                <CurrencyDollar size={22} weight="regular" className="paymentIcon" />
                <div>
                    <h4 className="textM">Pagamento</h4>
                    <span className="textS">O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                </div>
            </header>
            <div className="paymentMethodsContainer">
                {
                    methodList.map((actualMethod: Methods, index: number) => {
                        return (
                            <button
                                key={index}
                                className={method == actualMethod.value ? `buttonM selected` : `buttonM`}
                                onClick={() => selectPaymentMethod(actualMethod.value)}
                                value={actualMethod.value}>
                                <div>
                                    <span>
                                        {actualMethod.icon}
                                    </span>
                                    <span>
                                        {actualMethod.name}
                                    </span>
                                </div>
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}
