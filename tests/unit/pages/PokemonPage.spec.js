import PokemonPage from '@/pages/PokemonPage'
import { shallowMount } from '@vue/test-utils'
import { pokemons } from '../mocks/pokemons.mock'

describe('PokemonPage component', () => {
  let wrapper
  let mixPokemonArraySpy
  beforeEach(() => {
    wrapper = shallowMount(PokemonPage)
    mixPokemonArraySpy = jest.spyOn(PokemonPage.methods, 'mixPokemonArray')
  })
  test('should match with the snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('should call mixPokemonArray on mounted', () => {
    expect(mixPokemonArraySpy).toHaveBeenCalled()
  })
  test('should match with the snapshot when pokemons is loaded', () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })
    expect(wrapper.html()).toMatchSnapshot()
  })
  test('should show the components PokemonImage and PokemonOptions', () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })
    const image = wrapper.find('pokemon-image-stub')
    const options = wrapper.find('pokemon-options-stub')
    expect(image.exists()).toBeTruthy()
    expect(options.exists()).toBeTruthy()
    expect(image.attributes('pokemonid')).toBe('1')
    expect(options.attributes('pokemons')).toBeTruthy()
  })
  test('should check the answer', async () => {
    const wrapper = shallowMount(PokemonPage, {
      data () {
        return {
          pokemonArr: pokemons,
          pokemon: pokemons[0],
          showPokemon: false,
          showAnswer: false,
          message: ''
        }
      }
    })
    await wrapper.vm.checkAnswer(1)
    expect(wrapper.find('h2').exists()).toBeTruthy()
    expect(wrapper.vm.showPokemon).toBeTruthy()
    expect(wrapper.vm.message).toBe(`Correct! ${pokemons[0].name}`)
    await wrapper.vm.checkAnswer(10)
    expect(wrapper.vm.message).toBe(`Opps... it was ${pokemons[0].name}`)
  })
})
