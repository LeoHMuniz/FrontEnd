import { useState, useRef } from "react"


export function GettingPokemon() {


  const [coin, setCoin] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState('')
  const [pokeHistory, setPokeHistory] = useState([])
  const [pokeTipo, setPokeTipo] = useState('')
  const [pokeHistoryUpdated, setPokeHistoryUpdated] = useState([])
  const nomeDoPokemon = useRef(null)
  const backgroundTypes = {
    bug: `bg-[url('./assets/pokeBackground/pokemonBug.jpg')]`,
    dark: `bg-[url('./assets/pokeBackground/pokemonDark.jpg')]`,
    dragon: `bg-[url('./assets/pokeBackground/pokemonDragon.jpg')]`,
    electric: `bg-[url('./assets/pokeBackground/pokemonElectric.jpg')]`,
    fairy: `bg-[url('./assets/pokeBackground/pokemonFairy.jpg')]`,
    fire: `bg-[url('./assets/pokeBackground/pokemonFire.jpg')]`,
    ghost: `bg-[url('./assets/pokeBackground/pokemonGhost.jpg')]`,
    grass: `bg-[url('./assets/pokeBackground/pokemonGrass.jpg')]`,
    ice: `bg-[url('./assets/pokeBackground/pokemonIce.jpg')]`,
    poison: `bg-[url('./assets/pokeBackground/pokemonPoison.jpg')]`,
    rock: `bg-[url('./assets/pokeBackground/pokemonRock.jpg')]`,
    water: `bg-[url('./assets/pokeBackground/pokemonWater.jpg')]`
  }

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
    const json = await resposta.json()
    setPokemon(json)
    setCoin(true)
    setPokeTipo(json.types[0].type.name)

    setPokeHistory((prevState) => [...prevState, pokemonName])
    setPokeHistoryUpdated(pokeHistory.filter((value, index) => pokeHistory.indexOf(value) == index))
  }
  return (
    <main className="flex flex-row gap-8">
      <div className="">
        <div className={`w-80 h-[30rem] mt-52 border justify-center border-gray-800 border-solid rounded ${backgroundTypes[pokeTipo]}`}>
          <header className='mx-auto my-8 w-full text-center'>
            <p>Welcome to my pokemOnReact!</p>
          </header>
          <main className='flex-col flex w-3/5 m-auto justify-center align-bottom text-center'>
            <div className='justify-center my-auto align-middle text-center flex h-30'>
              <img className='h-24 rounded-full bg-gray-100/50 m-4'
                src={coin ? pokemon.sprites.front_default : ""}
                alt=""
              />
              {/* <button className="px-1 rounded border-solid border-gray-800 border flex h-fit">+</button> */}
            </div>

            <input type="text" placeholder='Name of the pokemon' className='text-center p-2 rounded ' onChange={getPokemonName} id="nomePokemon" ref={nomeDoPokemon} />
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

      </div>
      <div className="flex flex-col  mt-52 w-40 h-[30rem]">
        {
          pokeHistoryUpdated.map((pokemonSearched, index) => {
            return (
              <div key={index} className="w-40 bg-slate-300 rounded mb-0 p-1 text-center mb-2"><button onClick={() => handleHistory(pokemonSearched)}>{pokemonSearched}</button></div>
            )
          })
        }
      </div>
    </main>
  )
}