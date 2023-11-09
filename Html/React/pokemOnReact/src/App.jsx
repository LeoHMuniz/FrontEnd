import { useState } from 'react'


function App() {

  const [coin, setCoin] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState('')

  function getPokemonName() {
    setPokemonName(nomePokemon.value.toLowerCase())
  }

  function handleClick() {
    event.preventDefault()
    pokemonName === ""? alert('You gotta tell us a pokemon name'):getPokemon()
  }



  async function getPokemon() {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    setPokemon(await resposta.json())
    setCoin(true)
    console.log(pokemon.types.map(pokemonTypes => {
      console.log(pokemonTypes.type.name)
    }))
  }

  return (
    <div className="bg-gray-600 h-screen w-full flex">
      <div className='w-80 h-2/4 m-auto border justify-center border-gray-800 border-solid rounded bg-gray-400'>
        <header className='mx-auto my-8 w-full text-center'>
          <p>Welcome to my pokemOnReact!</p>
        </header>
        <main className='flex-col flex w-3/5 m-auto justify-center align-bottom text-center'>
          <div className='justify-center my-auto align-middle text-center flex h-30'>
            <img className='h-24 rounded-full bg-gray-100/50 m-4'
              src={coin ? pokemon.sprites.front_default : ""}
              alt=""
            />
          </div>

          <input type="text" placeholder='Name of the pokemon' className='text-center p-2 rounded ' onChange={getPokemonName} id="nomePokemon" />
          <button type="submit" className='p-2 rounded bg-orange-400 w-3/5 m-auto my-4' htmlFor="nomePokemon" onClick={handleClick}>Click me</button>
        </main>


        <div className="text-left mx-10 flex flex-col justify-center align-center">
          {
            coin ?
              <p className='p-1'>Nome: {pokemon.name}</p>
              : ""
          }
          {

            coin ? pokemon.types.map(pokemonTypes => {
              return (
                <p  className='p-1'>Tipo: {pokemonTypes.type.name}</p>)
            })
              :
              ""
          }
        </div>
      </div>
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