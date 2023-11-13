import { GettingPokemon } from './components/GettingPokemon'
import { HistoryPokemon } from './components/HistoryPokemon'

function App() {

  return (
    <div className="bg-gray-600 h-screen w-full flex justify-center align-middle wrap">
      <GettingPokemon />
    </div>
  )
}

export default App

//         coin ?
//         <div className="text-left mx-10 flex flex-col justify-center align-center">
//             <p>Nome do pokemon: {pokemon.name}</p>
//             <p>Habilidade principal: {pokemon.name}</p>
//           </div>

// : <div className="text-left mx-10 flex flex-col justify-center align-center">
//             <p>Nome do pokemon:</p>
//             <p>Habilidade principal:</p>
//           </div>