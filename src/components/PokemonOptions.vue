<template>
  <div class="options-container">
    <ul>
      <li
        class="animate__animated animate__jello"
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selection', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
  margin-block: 0;
  padding-inline: 0;
  margin-top: 40px;
}
li {
  text-transform: capitalize;
  text-align: center;
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(239, 240, 185, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
  padding: 10px;
  box-shadow: 2px 5px 9px 1px #1d1d1f5c;
}

li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.options-container {
  display: flex;
  justify-content: center;
}
</style>
