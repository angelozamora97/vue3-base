<template>
  <div>
    <pokemon-title></pokemon-title>
  </div>
  <div class="pokemon__container">
    <span
      v-for="(pokemon, index) in pokemons"
      :key="index"
      class="pokemon__badge"
    >
      {{ pokemon.name }}
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import PokemonTitle from "./components/PokemonTitle.vue";
import PokemonService from "@/services/api/pokemonService";

const pokemonService = new PokemonService();

export default defineComponent({
  name: "HomeView",
  components: {
    PokemonTitle,
  },
  async setup() {
    const pokemons = ref([]);

    const getPokemons = async () => {
      const {
        data: { results: pokemonList },
      } = await pokemonService.getData();
      console.log(pokemonList);
      pokemons.value = pokemonList;
    };

    await getPokemons();

    return {
      pokemons,
    };
  },
});
</script>

<style scoped>
.pokemon__container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.pokemon__badge {
  background-color: var(--color-primary);
  border-radius: 4px;
  color: white;
  padding: 8px 10px;
  margin: 8px;
}
</style>
