import { useState, useRef} from "react"

export function GettingPokemon() {


  const [coin, setCoin] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState('')
  const [pokeHistory, setPokeHistory] = useState([])
  const [pokeHistoryUpdated, setPokeHistoryUpdated] = useState([])
  const nomeDoPokemon = useRef(null)

  function getPokemonName() {
    setPokemonName(nomePokemon.value.toLowerCase())
  }

  function handleClick(event) {
    event.preventDefault()
    pokemonName === "" ? alert('You gotta tell us a pokemon name') : getPokemon(pokemonName)
  }


  function handleHistory(newName) {
    nomeDoPokemon.current.value = newName
    getPokemon(newName)
  }

  async function getPokemon(pokemonName) {
    const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    setPokemon(await resposta.json())
    setCoin(true)
    setPokeHistory((prevState) => [...prevState, pokemonName])
    setPokeHistoryUpdated(pokeHistory.filter((value, index)=>pokeHistory.indexOf(value) == index))
  }

  return (
    <div>
      <div className='w-80 h-[30rem] mt-52 border justify-center border-gray-800 border-solid rounded bg-gray-400'>
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

          <input type="text" placeholder='Name of the pokemon' className='text-center p-2 rounded ' onChange={getPokemonName} id="nomePokemon" ref={nomeDoPokemon}/>
          <button type="submit" className='p-2 rounded bg-orange-400 w-3/5 m-auto my-4' htmlFor="nomePokemon" onClick={handleClick}>Click me</button>
        </main>


        <div className="text-left mx-10 flex flex-col justify-center align-center">
          {
            coin ?
              <p className='p-1'>Nome: {pokemon.name}</p>
              : ""
          }
          {

            coin ? pokemon.types.map((pokemonTypes, index) => {
              return (
                <p key={index} className='p-1'>Tipo: {pokemonTypes.type.name}</p>)
            })
              :
              ""
          }
        </div>
      </div>
      {
        pokeHistoryUpdated.map((pokemonSearched, index) => {
          return (
            <div key={index} className="w-80 bg-slate-300 rounded mb-0 p-1 text-center mt-2"><button onClick={() => handleHistory(pokemonSearched)}>{pokemonSearched}</button></div>
          )
        })
      }
    </div>
  )
}