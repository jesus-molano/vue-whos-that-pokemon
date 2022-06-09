import { pokemonAPI } from '@/api/api.js'

describe('pokemonAPI', () => {
  test('axios must be configured with the API', () => {
    expect(pokemonAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon')
  })
})
