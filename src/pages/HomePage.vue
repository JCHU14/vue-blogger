<template>
  <div class="container-fluid">

    <div class="row justify-content-center text-center">

      <h1>
        <button class="btn shadow m-5 fs-3 bg-warning box" v-if="account.id" type="button" title="Open Post Form"
          data-bs-toggle="modal" data-bs-target="#postFormModal">Make Post</button>
      </h1>

      <div v-for="post in posts" :key="post.id" class="col-7 bg-warning m-5 box">
        <PostCard :postProp="post" />
      </div>

    </div>

  </div>

  <PostModalForm />
</template>

<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js';
import PostCard from '../components/PostCard.vue';
import PostModalForm from '../components/PostModalForm.vue';


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
  components: { PostCard, PostModalForm }
}
</script>



<style scoped lang="scss">
.box {
  border: 10px solid black;
}
</style>
