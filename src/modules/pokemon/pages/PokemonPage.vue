<template>
  <h1>Pokémon Page</h1>
  <hr>
  <div v-if="pokemon">
    <h2>Pokémon: #{{ id }} - {{ pokemon.name.toUpperCase() }}</h2>
    <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name" class="mt-5" width="250">
  </div>
</template>
  
<script>
export default {
  props: {
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      // id: this.$route.params.id
      pokemon: null
    }
  },
  created() {
    // const { id } = this.$route.params
    // console.log(id)
    // this.id = id
    this.getPokemon()
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${ this.id }`).then( r => r.json() )
        this.pokemon = pokemon
        // console.log(pokemon)
      } catch (error) {
        this.$router.push('/')
        console.log(`Pokémon con id ${ this.id } no existe, volvemos al ListPage`);
      }
      
    }
  },
  watch: {
    id() {
      this.getPokemon()
    }
  }
}
</script>

<style scoped>

</style>
