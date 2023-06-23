<template>
    <form action="">
        <!-- v-model permite sincronizar el contenido de una variable con el contenido que tenga un elemento HTML -->
        <input type="text" v-model="inputText">
        <input type="checkbox" v-model="checkbox">Acepto los términos y condiciones

        <select v-model="country">
            <option value="Spain">España</option>
            <option value="French">Francia</option>
            <option value="Inglaterra">Inglaterra</option>
        </select>
    </form>
    <h3>texto: {{ inputText }}</h3>
    <h3>condiciones: {{ checkbox }}</h3>
    <h3>país: {{ country }}</h3>
</template>
<script setup>
    import { ref } from 'vue';
    let inputText = ref('');
    let checkbox = ref('');
    let country = ref('');
</script>