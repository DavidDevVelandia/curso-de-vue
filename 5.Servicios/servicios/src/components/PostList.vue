<template>
  <div>hello world</div>
  <ul class="post-list">
    <li v-for="post in posts" :key="post.id">{{ post.title }}</li>
  </ul>
</template>

<style scoped>

</style>

<script>
  import PostService from '@/services/PostService';
  import { defineComponent, onMounted } from 'vue';

  export default defineComponent({
    name: 'PostList',
    setup(){
      const service = new PostService();
      const posts = service.getPosts();

      onMounted(async() => {
        await service.fetchAll()
      })
      return{posts}
    }
  })
</script>