<template>
    <div>
        {{ title }}
        {{ content }}
        {{ desc }}
    </div>
    <button @click="buttonClick()">di hola</button>
</template>
<script setup>
import { defineProps } from "vue";
import { defineEmits } from "vue";

defineProps( 
{
    title : {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: false
    },
    desc : {
        type: String
    },
})

//como interactuar con el emit padre
const emit = defineEmits(
    ["sayHi"]   
)
function buttonClick(){
    emit('sayHi', "Hola mundo");
}
</script>
<style scoped>

</style>