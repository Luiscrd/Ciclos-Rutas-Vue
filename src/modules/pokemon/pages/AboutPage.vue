<template>
  <h1>About Page</h1>
  <hr>
  <h2>Nombre: {{ name }}</h2>
  <button type="button" class="btn btn-primary mt-2 mb-2" @click="onChangeName">Cambiar Nombre</button>
  <hr>
</template>

<script>
export default {
  data() {
    return {
      name: 'Bualbasur'
    }
  },
  methods: {
    onChangeName() {
      console.log('onChangeName')
      this.name = 'Pikachu'
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  },
  created() {
    this.name = 'Charmander'
    console.log('created')
    // TODO: Peticiones HTTP
  },
  beforeMount() {
    console.log('beforeMount')
  },
  mounted() {
    console.log('mounted')
  },
  beforeUpdate() {
    console.log('beforeUpdate')
  },
  updated() {
    console.log('updated')
  },
  activated() {
    console.log('activated')
  },
  deactivated() {
    console.log('deactivated')
  },
  beforeUnmount() {
    console.log('beforeUnmount')
  },
  unmounted() {
    console.log('unmounted')
  },
  errorCaptured() {
    console.log('errorCaptured')
  },
  renderTracked() {
    console.log('renderTracked')
  },
  renderTriggered() {
    console.log('renderTriggered')
  }
}
</script>

<style scoped>
.btn:hover {
  color: white;
  background-color: #535252;
  border-color: #535252;
  ;
}

.btn-primary {
  --bs-btn-color: #fff;
  --bs-btn-bg: #6d6c6c;
  --bs-btn-border-color: #6d6c6c;
  --bs-btn-hover-color: #fff;
  --bs-btn-hover-bg: #6d6c6c;
  --bs-btn-hover-border-color: #6d6c6c;
  --bs-btn-focus-shadow-rgb: 49, 132, 253;
  --bs-btn-active-color: #fff;
  --bs-btn-active-bg: #6d6c6c;
  --bs-btn-active-border-color: #6d6c6c;
  --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
  --bs-btn-disabled-color: #fff;
  --bs-btn-disabled-bg: #6d6c6c;
  --bs-btn-disabled-border-color: #6d6c6c;
}
</style>
