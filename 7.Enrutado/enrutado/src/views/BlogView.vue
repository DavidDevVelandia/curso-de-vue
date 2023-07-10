<template>
    <h1>Blog section</h1>
    <ul>
        <!-- buena práctica -->
        <li><router-link :to='{name: "post", params: {
            id: 1
        }}'>primer post</router-link></li>
        <li><router-link :to='{name: "post", params: {
            id: 2
        }}'>segundo post</router-link></li>
        <li><router-link :to='{name: "post", params: {
            id: 3
        }}'>tercero post</router-link></li>
        <li><router-link :to="{name: 'post', params: {
            id: 4}}">cuarto post</router-link></li>
    </ul>
</template>

<style scoped>

</style>
<script setup>

</script>