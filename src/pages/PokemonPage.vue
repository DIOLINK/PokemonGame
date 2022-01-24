<template>
  <h1 class="title" v-if="!pokemon">
    Espere por favor...
    <div class="spinner-container"><div class="spinner-pokemon" /></div>
  </h1>
  <div v-else>
    <h1 class="title">¿Quién es este Pokemon?</h1>
    <PokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <PokemonOptions
      :pokemons="pokemonArr"
      @selection="checkAnswer($event)"
      :style="{ display: !showAnswer ? 'flex' : 'none' }"
    />
  </div>
  <template v-if="showAnswer" class="animate__animated animate__fadeInDown">
    <h2 :class="correct">{{ message }}</h2>
    <button class="btn" @click="resetGame">Jugar de Nuevo</button>
  </template>
</template>

<script>
import PokemonPicture from '@/components/PokemonPicture.vue';
import PokemonOptions from '@/components/PokemonOptions.vue';

import getPokemonOptions from '@/helpers/getPokemonOptions';

export default {
  components: {
    PokemonOptions,
    PokemonPicture,
  },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      correct: null,
      answer: '',
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      const randomIndex = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[randomIndex];
    },
    checkAnswer(pokemonId) {
      this.showPokemon = true;
      this.showAnswer = true;
      if (pokemonId === this.pokemon.id) {
        this.correct = 'answer-true';
        this.message = `¡Correcto! es ${this.pokemon.name}`;
      } else {
        this.correct = 'answer-false';
        this.message = `¡Incorrecto! era ${this.pokemon.name}`;
      }
    },
    resetGame() {
      this.pokemon = null;
      this.showPokemon = false;
      this.showAnswer = false;
      this.message = '';
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>
