/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'Dark': "url('./src/assets/pokeBackground/pokemonDark')",
        'Bug': "url('./src/assets/pokeBackground/pokemonBug')",
        'Dragon': "url('./src/assets/pokeBackground/Dragon')",
        'Eletric': "url('./src/assets/pokeBackground/Eletric')",
        'Fire': "url('./src/assets/pokeBackground/pokemonFire')",
        'Water': "url('./src/assets/pokeBackground/pokemonWater')",
        'Ice': "url('./src/assets/pokeBackground/pokemonIce')",
        'Rock': "url('./src/assets/pokeBackground/pokemonRock')",
        'Ghost': "url('./src/assets/pokeBackground/pokemonGhost')",
        'Fairy': "url('./src/assets/pokeBackground/pokemonFairy')",
        'Grass': "url('./src/assets/pokeBackground/pokemonGrass')",
      }
    },
  },
  plugins: [],
}