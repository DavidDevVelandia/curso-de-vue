<template>

    <!-- las directivas son instrucciones especiales para aplicar un comportamiento específico a los elementos del DOM en una app Vue -->
    <!-- v-if se usa para renderizar en el virtual dom el contenido de la etiqueta si se cumple la condición (tiene sus variantes como v-else-if y v-else) -->

    <h1 v-if="age < 18">Eres menor de edad</h1>
    <h1 v-else-if="age > 18">Eres mayor de edad</h1>

    <!-- A diferencia del v-if, con v-show si la condición no se cumple en vez de no renderizarse como en el v-if, simplemente agrega un display: none;0 a la etiqueta -->
    <h1 v-show="age<18">Eres menor de edad desde v-show</h1>
</template>
<script setup>
    let age = 20;

</script>
<style scoped>

</style>