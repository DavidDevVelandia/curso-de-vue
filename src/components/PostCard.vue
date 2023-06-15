<template>
    <div class="post-card">
        <h3>Titulo</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias in blanditiis non minima ullam, quisquam officiis quam sequi facere dicta at nemo cum facilis qui dolor. Possimus nisi unde alias?</p>

        <!-- Use component -->
        <PostBtn/>
    </div>
</template>
<script setup>
    //import Component
    import PostBtn from './PostBtn.vue';

</script>
<style scoped>

.post-card{
    border-radius: 15px;
    padding: 10px;
    margin: 5px;
    border: 1px solid #ccc;
}
</style>