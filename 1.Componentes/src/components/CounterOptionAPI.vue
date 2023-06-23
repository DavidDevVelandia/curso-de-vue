<template>
    <h3>{{ counter }}</h3>
    <button @click="addCounter()">Increase</button>
</template>

<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: `CounterOptionAPI`,
        data() {
            let counter = 0;
            return {counter}
        },
        methods: {
            addCounter(){
                this.counter++
            }
        }
    })
</script>