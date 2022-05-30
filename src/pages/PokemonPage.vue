<script>
import PokemonImage from '@/components/PokemonImage'
import PokemonOptions from '@/components/PokemonOptions'
import { getPokemonOptions } from '@/helpers/getPokemonOptions'

export default {
  components: {
    PokemonImage,
    PokemonOptions
  },
  data () {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswers: false,
      message: null
    }
  },
  methods: {
    async mixPokemonArray () {
      this.pokemonArr = await getPokemonOptions()
      const randomInt = Math.floor(Math.random() * (this.pokemonArr.length))
      this.pokemon = this.pokemonArr[randomInt]
    },
    checkAnswer (selectedId) {
      this.showPokemon = true
      this.showAnswers = true
      if (selectedId === this.pokemon.id) {
        this.message = `Correct! ${this.pokemon.name}`
      } else {
        this.message = `Opps... it was ${this.pokemon.name}`
      }
    },
    newGame () {
      this.showPokemon = false
      this.showAnswers = false
      this.pokemonArr = []
      this.pokemon = null
      this.mixPokemonArray()
    }
  },
  mounted () {
    this.mixPokemonArray()
  }
}
</script>

<template>
  <main>
  <h1 v-if='!pokemon'>Loading...</h1>
  <div v-else>
    <h1>Who's that Pokemon?</h1>
    <PokemonImage  :pokemonId='pokemon.id' :showPokemon='showPokemon'/>
    <PokemonOptions :pokemons='pokemonArr' @selection='checkAnswer' />
    <div v-if='showAnswers' class='answer-container'>
      <h2 class='fade-in'>{{message}}</h2>
      <button @click='newGame'>New Game</button>
    </div>
  </div>
  </main>
</template>

<style scoped>
  main{
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  .answer-container{
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
