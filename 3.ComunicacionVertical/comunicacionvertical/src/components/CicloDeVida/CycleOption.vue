<template>
  <h1>Ciclo de vida en Option API</h1>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent(
  {
    name: "CycleOption",
    data(){

    },
    methods(){

    },
    // funciones segun el ciclo de vida del componente
    beforeCreate(){ //funcion antes de que se crea el componente

    },
    created(){ //funcion cuando se crea el componente

    },
    beforeMounted(){ //se ejecuta antes de que se renderizen el DOM

    },
    mounted(){ //se ejecuta cuando se renderiza el DOM

    },
    beforeUpdated(){//se ejecuta antes del Updated

    },
    Updated(){//se ejecuta cada vez que se produce un cambio en un componente

    },
    beforeUnmount(){//se ejecuta antes de que se destruya el componente

    },
    unmounted(){//se ejecuta cuando se destruye el componente

    }
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
