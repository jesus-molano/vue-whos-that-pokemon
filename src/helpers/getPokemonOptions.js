import { pokemonAPI } from '@/api/api'

const getPokemons = () => {
  const pokemonArr = Array.from(Array(650))
  return pokemonArr.map((_, index) => index + 1)
}

export const getPokemonOptions = async () => {
  const mixedPokemons = getPokemons().sort(() => Math.random() - 0.5)
  const pokemons = await getPokemonNames(mixedPokemons.splice(0, 4))
  return pokemons
}

const getPokemonNames = async ([a, b, c, d] = []) => {
  const promisesArr = [
    pokemonAPI.get(`/${a}`),
    pokemonAPI.get(`/${b}`),
    pokemonAPI.get(`/${c}`),
    pokemonAPI.get(`/${d}`)
  ]
  const [pokemon1, pokemon2, pokemon3, pokemon4] = await Promise.all(promisesArr)
  return [
    { name: pokemon1.data.name, id: pokemon1.data.id },
    { name: pokemon2.data.name, id: pokemon2.data.id },
    { name: pokemon3.data.name, id: pokemon3.data.id },
    { name: pokemon4.data.name, id: pokemon4.data.id }
  ]
}
