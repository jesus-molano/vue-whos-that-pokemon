import { shallowMount } from '@vue/test-utils'
import PokemonOptions from '@/components/PokemonOptions'

describe('PokemonOptions component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallowMount(PokemonOptions, {
      props:{
        pokemons:
      }
    })
  })
  test('should match with snapshot', () => {
    const wrapper = shallowMount(PokemonOptions)
    expect(wrapper).toMatchSnapshot()
  })
})
