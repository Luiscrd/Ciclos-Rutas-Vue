<template>
    <div class="dbz-layout">
        <div class="container mt-5">
            <h1>Dragon Ball Z</h1>
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
.dbz-layout{
    background-color: #568ddf;
    color: white;
    min-height: calc(100vh - 216px);
}
</style>