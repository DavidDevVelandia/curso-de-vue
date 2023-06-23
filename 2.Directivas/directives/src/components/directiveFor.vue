<template>
<ul>
    <!-- v-for renderiza en el nodo por cada iterable al que fue referenciado, funciona en objetos iterables como arrays, objetos... -->
    <li v-for="country in countries" v-bind:key="country.code">{{ country.name }}</li>
</ul>
</template>
    <script setup>
    import { ref } from 'vue';
    let countries = ref([
    {
        code: "es",
        name: "Spanish"
    },
    {
        code: "en",
        name: "English"
    },
    {
        code: "Fr",
        name: "France"
    }]);
</script>
<style>

</style> 