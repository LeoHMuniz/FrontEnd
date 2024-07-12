import { MapPinLine } from '@phosphor-icons/react'

export default function FormsContainer() {
    return (
        <div className="formsContainer">
            <header>
                <MapPinLine size={22} weight="regular" className="locationIcon" />
                <div>
                    <h4 className="textM">Endereço de Entrega</h4>
                    <span className="textS">Informe o endereço onde deseja receber seu pedido</span>
                </div>
            </header>
            <form action="">
                <input type="text" placeholder="CEP" className="textS cepInput" />
                <input type="text" placeholder="Rua" className="textS streetInput" />
                <div>
                    <input type="text" placeholder="Número" className="textS numberInput" />
                    <input type="text" placeholder="Complemento" className="textS complInput" />
                </div>
                <div>
                    <input type="text" placeholder="Bairro" className="textS neighboorInput" />
                    <input type="text" placeholder="Cidade" className="textS cityInput" />
                    <input type="text" placeholder="UF" className="textS ufInput" />
                </div>
            </form>
        </div>
    )
}
