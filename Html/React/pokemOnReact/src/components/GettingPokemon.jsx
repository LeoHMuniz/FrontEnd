import { useState, useRef } from "react"


export function GettingPokemon() {


  const [coin, setCoin] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const [pokemonName, setPokemonName] = useState('')
  const [pokeHistory, setPokeHistory] = useState([])
  const [pokeType, setPokeType] = useState('')
  const [pokeHistoryUpdated, setPokeHistoryUpdated] = useState([])
  const [pokeTeam, setPokeTeam] = useState([])
  const [pokeTeamUpdated, setPokeTeamUpdated] = useState([])
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
    setPokeType(json.types[0].type.name)

    setPokeHistory((prevState) => [...prevState, pokemonName])
    setPokeHistoryUpdated(pokeHistory.filter((value, index) => pokeHistory.indexOf(value) == index))
  }

  function addToTeam() {
    setPokeTeam((prevState) => [...prevState, pokemon])
  }

  function getPokemonOut(event) {
    let toRemove = event.target.id
    console.log(toRemove)
    setPokeTeam(pokeTeam.splice(toRemove,1))
  }

  return (
    <>
      <main className="flex flex-row justify-center align-middle gap-8">
        <div className="">
          <div className={`w-80 h-[30rem] mt-52 border justify-center border-gray-200 border-solid rounded ${backgroundTypes[pokeType]}`}>
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

              <input type="text" placeholder='Name of the pokemon' className='text-center p-2 rounded ' onChange={getPokemonName} id="nomePokemon" ref={nomeDoPokemon} />
              <div className="flex row gap-1 ">
                <button type="submit" className='p-1 rounded bg-gray-400 hover:bg-gray-200 w-3/5 m-auto my-4 transition-colors ease-in-out duration-300' htmlFor="nomePokemon" onClick={handleClick}>Search</button>
                <button type="submit" className='p-1 rounded bg-orange-600 hover:bg-orange-400 w-3/5 m-auto my-4 transition-colors ease-in-out duration-300' onClick={addToTeam}>Get!</button>
              </div>
            </main>


            <div className="text-left mx-10 flex flex-col justify-center align-center">

              {
                coin ?
                  <p className='p-1 capitalize'>Nome: {pokemon.name}</p>
                  : ""
              }
              {

                coin ? pokemon.types.map((pokemonTypes, index) => {
                  return (
                    <p key={index} className='p-1 capitalize'>Tipo: {pokemonTypes.type.name}</p>)
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
      <div className="flex flex-row w-8/12 mx-auto">
        {
          pokeTeam.map((pokemons, index) => {
            return(
              <div key={index} id={index} className={`w-40 h-52 border  flex flex-col mt-12 mx-2 border-gray-200 border-solid rounded hover:-translate-y-2  transform-all ease-in-out duration-300 ${backgroundTypes[pokemons.types[0].type.name]}`}>
                <button id={index} className="ml-28 mt-2 border-red-300 border border-solid p-0 text-center p-0 bg-red-500 w-10" onClick={getPokemonOut}>X</button>
                <div className=' w-3/5 m-auto justify-center text-center mt-2'>
                  <div className='justify-center my-auto align-middle text-center flex flex-col h-30'>
                    <img className='h-24 w-full rounded-full bg-gray-100/50 mx-auto'
                      src={coin ? pokemons.sprites.front_default : ""}
                      alt=""
                    />
                    <h4 className="mt-2 capitalize">{pokemons.name}</h4>
                  </div>
                </div>
              </div>
              )
          })}
      </div>
    </>
  )
}