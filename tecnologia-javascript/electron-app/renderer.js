function getPokemon(pokemon) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
}

document.getElementById('form').addEventListener('submit', e => {
e.preventDefault();
const pokemon = document.getElementById('pokemon');
const imgFrente = document.getElementById('pokemon-frente')
const imgCostas = document.getElementById('pokemon-costas')
const imgFrenteShiny = document.getElementById('pokemon-frente-shiny')
const imgCostasShiny = document.getElementById('pokemon-costas-shiny')

getPokemon(pokemon.value)
  .then(response => response.json())
  .then(response => {
      imgFrente.src = response.sprites.front_default
      imgCostas.src = response.sprites.back_default
      imgFrenteShiny.src = response.sprites.front_shiny
      imgCostasShiny.src = response.sprites.back_shiny
  })
  .catch(err => {
      console.log(err)
  })
})