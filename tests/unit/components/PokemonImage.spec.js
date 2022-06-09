import { shallowMount } from '@vue/test-utils'
import PokemonImage from '@/components/PokemonImage'

describe('PokemonImage component', () => {
  test('should match with snapshot', () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 1,
        showPokemon: false
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  test('should render hidden image and pokemon nº 100', () => {
    const wrapper = shallowMount(PokemonImage, {
      props: {
        pokemonId: 100,
        showPokemon: false
      }
    })
    const img1 = wrapper.find('img')
    expect(img1.exists()).toBeTruthy()
    expect(img1.classes('hidden-pokemon')).toBeTruthy()
    expect(img1.attributes('src')).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
  })
})
