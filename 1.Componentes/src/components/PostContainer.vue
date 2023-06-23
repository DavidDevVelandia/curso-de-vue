<template>
    <div class="post-container">
        <PostCard/>
        <PostCard/>
        <PostCard/>
        <PostCard/>
    </div>
</template>

<script setup>
import PostCard from './PostCard.vue';
</script>
<style>
.post-container{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
}
</style>