<template>
    <!-- Esta directiva permite enlazar (bindear) una variable de Vue con un atributo específico de una etiqueta HTML. Como las clases, ids, img, src, etc -->
    <!-- se puede sipmlificar la escritura de v-bind: a tan solo : -->

    <p v-bind:class="{
        'danger': hasError,
    }" v-on:click="sendMessage()">El mensaje se ha enviado satisfactoriamente</p>
    <!-- tambien se puede llamar eventos en las directivas usando la directiva v-on:evento="funcion", aunque se puede simplificar a @:evento="funcion" -->
</template>
<script setup>
    let  hasError = false;
    const sendMessage = () => {
        console.log("mensaje enviado");
    }
</script>
<style>
    .danger{
        color: red;
    }
</style>