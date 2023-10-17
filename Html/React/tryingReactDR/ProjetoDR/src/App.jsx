import {Header} from './components/Header'
import { Carroussel } from './components/Carroussel'
import { Card } from './components/Card'
import './App.css'

const cards = [
  {
      id: 1,
      name: 'Odontologia',
      imgUrl: 'https://images.unsplash.com/photo-1620775997990-ee3c25938b4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG9kb250b2xvZ2lhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }, {
      id: 2,
      name: 'Acessibilidade',
      imgUrl: 'https://images.unsplash.com/photo-1634947096506-6d9f114cf64e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QWNlc3NpYmlsaWRhZGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }
  , {
      id: 3,
      name: 'Action Figures',
      imgUrl: 'https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWN0aW9uJTIwZmlndXJlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }
  , {
      id: 4,
      name: 'Modelagem',
      imgUrl: 'https://images.unsplash.com/photo-1561037404-61cd46aa615b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FjaG9ycm98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }
  , {
      id: 5,
      name: 'Peças para reposição',
      imgUrl: 'https://images.unsplash.com/photo-1602982356353-7e0b033a2880?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGUlQzMlQTdhcyUyMHBhcmElMjByZXBvc2klQzMlQTclQzMlQTNvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }
  , {
      id: 6,
      name: 'Prototipagem',
      imgUrl: 'https://images.unsplash.com/photo-1576595580361-90a855b84b20?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvdG90aXBhZ2VtfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      description: 'This is a description'
  }
]

function App() {

  return (
    <>
      <Header/>
      <Carroussel/>
      <main className='cardContainer'>
        {cards.map(card => {
          return(
            <Card
            key={card.id}
            name={card.name}
            imgUrl={card.imgUrl}
            description={card.description}
            />
          )
        })}
      </main>
    </>
  )
}

export default App
