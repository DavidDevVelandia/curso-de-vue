<template>
    <h1>Post view</h1>
    <p>post actual {{ postId }}</p>
    <router-link :to='{name: "blog2"}'>acceder a blog2</router-link>
    <router-view></router-view>
</template>
<style scoped>

</style>
<script setup>
    import { onMounted, ref } from 'vue';
    import { useRoute } from 'vue-router';
    let postId = ref('');
    onMounted(()=>{
        const route = useRoute();
        postId.value = route.params.id;
    })
</script>