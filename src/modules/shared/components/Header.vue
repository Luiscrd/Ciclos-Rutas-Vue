<template>
  <div class="toolbar">
  <img width="100" alt="Lc Logo" src="../../assets/logolcprograming3.png" />
  <span>Ciclos - Rutas - Vue</span>
  <img width="50" alt="Vue Logo" src="../../assets/logo_vue.png" />
  <div class="spacer"></div>
  <a href="https://github.com/Luiscrd" target="_blank" class="link-github">
    <span class="span-lc">LcrPrograming</span>
    <img src="../../assets/github_PNG40.png" alt="Github" class="logo-github">
  </a>
</div>
</template>

<script>
export default {
  name: 'Header',
  props: {
  }
}
</script>

<style scoped>
p {
  margin: 0;
}

a,
a:visited,
a:hover {
  color: white;
  text-decoration: none;
}

a:hover {
  color: #6d6c6c;
}

.spacer {
  flex: 1;
}

.toolbar {
  position: relative;
  width: 100%;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #6d6c6c;
  color: white;
  font-weight: bold;
  font-size: 1.5em;
}

.toolbar img {
  margin: 0 16px;
}

.link-github {
  cursor: pointer;
  transition: 0.5s;
  display: flex;
  align-items: center;
}

.link-github:hover {
  opacity: 0.5;
}

.span-lc {
  position: relative;
  color: white;
}

.logo-github {
  width: 50px;
}
</style>