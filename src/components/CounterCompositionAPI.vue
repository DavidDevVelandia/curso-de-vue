<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter">Incrementar</button>
</template>
<script setup>
import { ref } from "vue"
    //let counter = 0; se declara la variable pero no es reactiva

    //con ref() indica que la variable sera reactiva
    let counter = ref(0);
    const addCounter = () => {
        counter.value++
    }
</script>