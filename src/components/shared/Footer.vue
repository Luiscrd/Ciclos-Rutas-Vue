<template>
  <div class="footer mt-auto">
    <span class="by-footer">By: LcrPrograming</span>
    <a href="https://www.linkedin.com/in/luis-carballo-rua-3b4763248/" target="_blank">
      <img src="../../assets/in.png" alt="Linked In" class="logo-liked">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
  }
}
</script>

<style scoped>
.footer{
  width: 100%;
  position: relative;
  background-color: #038996;
  color: white;
  padding: 20px 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
}

.by-footer{
  position: relative;
  font-weight: bold;
}

.logo-liked{
  height: 30px;
  transition: 0.5s;
}

.logo-liked:hover{
  opacity: 0.5;
}
</style>