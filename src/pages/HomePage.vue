<template>
  <div class="container-fluid">

    <div class="row justify-content-center">

      <div v-for="post in posts" :key="post.id" class="col-7 bg-warning m-5 borderBox">
        <PostCard :postProp="post" />
      </div>

    </div>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';


export default {
  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      }
      catch (error) {
        Pop.error(error);
      }
    }
    onMounted(() => {
      getPosts();
    });
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)
    };
  },
  components: { PostCard }
}
</script>



<style scoped lang="scss"></style>
