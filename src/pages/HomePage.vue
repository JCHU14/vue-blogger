<template>
  <div class="container-fluid">

    <div class="row justify-content-center">

      <div v-for="post in posts" :key="post.id" class="col-7 bg-warning m-5 borderBox">

        <div class="text-dark text-center m-5">
          <img class="imageBlock borderBox" :src="post.imgUrl" alt="">
          <div>
            <img class="creatorPic m-4 rounded-circle" :src="post.creator.picture" alt="">

          </div>
          <p class="fs-2">{{ post.title }}</p>
          <p class="fs-5">{{ post.body }}</p>
        </div>

      </div>

    </div>

  </div>
</template>

<script>
import { computed, onMounted } from 'vue';
import { postsService } from '../services/PostsService.js';
import Pop from '../utils/Pop';
import { AppState } from '../AppState.js';


export default {

  setup() {
    async function getPosts() {
      try {
        await postsService.getPosts();
      } catch (error) {
        Pop.error(error)
      }
    }
    onMounted(() => {

      getPosts();

    })
    return {
      posts: computed(() => AppState.posts),
      account: computed(() => AppState.account)
    }
  }
}
</script>



<style scoped lang="scss">
.imageBlock {
  width: 35vh;
  height: 35vh;
  object-fit: cover;
}

.creatorPic {
  width: 10vh;
  height: 10vh;
}

.borderBox {
  border: 5px solid black;
}
</style>
