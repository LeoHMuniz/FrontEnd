import { MapPinLine } from '@phosphor-icons/react'
import { useContext } from 'react'
import { infoContext } from '../layouts/DefaultLayout/DefaultLayout'

export default function FormsContainer() {


    const [clientInformations, setClientInformations] = useContext(infoContext);

    function handleLocation(location: string) {
        let clientLocation = location.toLowerCase()
        clientInformations.street = clientLocation.trimEnd()
    }

    function handleNumber(houseNumber: string) {
        let clientHouseNumber = houseNumber;
        clientInformations.number = clientHouseNumber.trimEnd()
    }

    function handleNeighboor(neighboor: string) {
        let neighboorhood = neighboor.toLowerCase()
        clientInformations.neighboorhood = neighboorhood.trimEnd()
    }

    function handleCity(city: string) {
        let clientCity = city.toLowerCase()
        clientInformations.city = clientCity.trimEnd()
    }

    function handleState(state: string) {
        let clientState = state.toUpperCase()
        clientInformations.state = clientState.trimEnd()
    }

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
                <input type="text" placeholder="Rua" className="textS streetInput" onChange={(e) => handleLocation(e.target.value)} />
                <div>
                    <input type="text" placeholder="Número" className="textS numberInput" onChange={(e) => handleNumber(e.target.value)} />
                    <input type="text" placeholder="Complemento" className="textS complInput" />
                </div>
                <div>
                    <input type="text" placeholder="Bairro" className="textS neighboorInput" onChange={(e) => handleNeighboor(e.target.value)} />
                    <input type="text" placeholder="Cidade" className="textS cityInput" onChange={(e) => handleCity(e.target.value)} />
                    <input type="text" placeholder="UF" className="textS ufInput" onChange={(e) => handleState(e.target.value)} />
                </div>
            </form>
        </div>
    )
}
