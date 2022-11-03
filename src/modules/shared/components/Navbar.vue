<template>
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img width="30" alt="Vue Logo" src="../../../assets/logo_vue.png" class="logo-vue" />
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About Page</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Pokémon List</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" :to="{ name: 'pokemon-id' }">Pokémon Page</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {

}
</script>

<style scoped>
.logo-vue {
    filter: brightness(47%);
}

.router-link-active{
    font-weight: bold;
}
</style>

