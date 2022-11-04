<template>
    <div class="pokemon-layout">
        <div class="container mt-5">
            <h1>Pokémon</h1>
            <hr>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.pokemon-layout{
    background-color: #78b231;
    color: white;
    min-height: calc(100vh - 216px);
}
</style>