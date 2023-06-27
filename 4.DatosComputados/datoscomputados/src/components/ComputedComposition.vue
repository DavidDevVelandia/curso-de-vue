<template>
  <div>
    <input type="text" v-model="message">
    <h3>{{ message }}</h3>
    <h3>{{ reverse }}</h3>
  </div>
</template>
<script>
    import { defineComponent, ref, computed } from 'vue';
    export default defineComponent({
        name: 'ComputedComposition',
        setup(){
            let message = ref('')
            const reverse = computed(() => message.value.split('').reverse().join(''));
            return {message, reverse};
        }
    });
</script>
<style scoped>

</style>