import '../styles/succsess.scss'
import ilustration from "../assets/Illustration.svg"
import { MapPin, Money, Timer } from '@phosphor-icons/react'
import { useContext, useEffect } from 'react'
import { infoContext, methodContext } from '../layouts/DefaultLayout/DefaultLayout'

export default function Success() {

  const [method] = useContext(methodContext)
  const [clientsInfo] = useContext(infoContext)

  useEffect(()=>{
    console.log(clientsInfo, method)
  })

  return (
    <section className="successSection">
      <div>
        <div>
          <h2 className="titleL">Uhu! Pedido confirmado</h2>
          <p className="textL">Agora é só aguardar que logo o café chegará até você</p>
        </div>
        <div className="instructionsContainer">
          <div><MapPin size={16} className="icon mapPinIcon" weight={"fill"} /><span className="textM">Entrega em: <b>{clientsInfo.street}, {clientsInfo.number}</b><br/>{clientsInfo.neighboorhood} - {clientsInfo.city}, {clientsInfo.state}</span></div>
          <div><Timer size={16} className="icon timerIcon" weight={"fill"} /><span className="textM">Previsão de entrega: <br /><b>20 - 30 min</b></span></div>
          <div><Money size={16} className="icon moneyIcon" weight={"fill"} /><span className="textM">Pagamento na entrega: <b>{method}</b></span></div>
        </div>
      </div>
      <div className="imgContainer">
        <img src={ilustration} alt="" />
      </div>
    </section>
  )
}
