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
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Pokemons</a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="nav-link" :to="{ name: 'pokemon-about' }">About</router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" :to="{ name: 'pokemon-list' }">Pokémon List</router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" :to="{ name: 'pokemon-id', params: { id: 1 } }">Pokémon
                                    Page</router-link>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Dbz</a>
                        <ul class="dropdown-menu">
                            <li>
                                <router-link class="nav-link" :to="{ name: 'dbz-about' }">About</router-link>
                            </li>
                            <li>
                                <router-link class="nav-link" :to="{ name: 'dbz-characters' }">Characters</router-link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    components: {

    }
}
</script>

<style scoped>
.logo-vue {
    filter: brightness(47%);
}

.router-link-active {
    font-weight: bold;
}
</style>

