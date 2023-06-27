<template>
    <!-- uso de las props -->
    <!-- Modificar el contenido de los hijos  con props -->
    <!-- modificar al padre con emits que son eventos personalizados -->
    <PostDetail v-for="elm in info" :key="elm.title" :title="elm.title" :content="elm.content" :desc="desc" @sayHi="showAlert"/>
</template>
<script setup>
    import PostDetail from './PostDetail.vue';
    let info = [
        {
            title: "This is the post 1",
            content: "Example text 1"
        },
        {
            title: "This is post 2",
            content: "Example text 2"
        },
        {
            title: "This is post 3",
            content: "Example text 3"
        },
        {
            title: "This is post 4",
            content: "Example text 4"
        },
        {
            title: "This is post 5",
            content: "Example text 5"
        }
    ]
    let desc = "description";


    function showAlert (msg){
        alert(msg);
    }
</script>
<style scoped>

</style>