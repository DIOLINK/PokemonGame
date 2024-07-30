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
  <div class="player-name">
    <h2>Ingresa tu nombre de jugador</h2>
    <input v-model="playerName" placeholder="Nombre de jugador" />
    <button @click="savePlayerName">Guardar</button>
    <p v-if="savedName">Nombre guardado: {{ savedName }}</p>
  </div>
</template>

<script>
import PokemonPicture from '../components/PokemonPicture.vue';
import PokemonOptions from '../components/PokemonOptions.vue';
import getPokemonOptions from '../helpers/getPokemonOptions';
import { ref, onMounted } from 'vue';

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
  setup() {
    const playerName = ref('');
    const savedName = ref('');

    const savePlayerName = () => {
      localStorage.setItem('playerName', playerName.value);
      savedName.value = playerName.value;
    };

    onMounted(() => {
      savedName.value = localStorage.getItem('playerName') || '';
    });

    return {
      playerName,
      savedName,
      savePlayerName,
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

<style scoped>
.player-name {
  border-radius: 5px;
  border: 1px solid rgba(239, 240, 185, 0.2);
  padding: 10px;
  box-shadow: 2px 5px 9px 1px #1d1d1f5c;
}
</style>
