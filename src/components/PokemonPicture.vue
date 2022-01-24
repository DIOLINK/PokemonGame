<template>
  <div class="pokemon-container animate__animated animate__wobble">
    <img :src="imgSrc" alt="pokemon" class="hidden-pokemon" />
    <img
      :src="imgSrc"
      alt="pokemon"
      class="fade-in"
      v-if="showPokemon"
      :style="{ filter: 'drop-shadow(2px 4px 6px black)' }"
    />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    showPokemon: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      pokemonId: this.pokemonId,
    };
  },
  computed: {
    imgSrc() {
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`;
    },
  },
};
</script>

<style scoped>
.pokemon-container {
  height: 200px;
}
img {
  height: 200px;
  position: absolute;
  width: 100vw;
  right: 0;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
}
.hidden-pokemon {
  filter: brightness(0);
}
</style>
