<template>
    <button class="post-btn">Acceder</button>
</template>
<script setup>

</script>
scoped mean that styles only affect this component
<style scoped>
.post-btn{
    padding: 15px;
    background-color: blueviolet;
    color: white;
    border: 0;
}
.post-btn:hover{
    background-color: white;
    color: blueviolet;
}
</style>