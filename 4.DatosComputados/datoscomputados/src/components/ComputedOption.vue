<template>
  <div>
    <input type="text" v-model="message">
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>
<script>
  import { defineComponent } from 'vue';
  export default defineComponent({
    name: 'ComputedOption',
    data(){
      return{
        message: ''
      }
    },
    //datos computados
    computed: {
      //el dato computado es una propiedad calculada que se basa en los datos existentes dentro de un componente. Son funciones definidas dentro del componente que devuelven un valor en función de uno o más datos de origen. Estos datos se actualizan cuando cambia un valor de la dependencia del dato computado. En el caso cuando message cambia, el dato computado tambien
      reverse(){
        return this.message.split('').reverse().join('');
      }
    }
  });
</script>
<style scoped>

</style>