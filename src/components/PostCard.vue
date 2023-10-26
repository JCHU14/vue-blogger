<template>
    <div class="text-dark text-center m-5">
        <img class="imageBlock borderBox" :src="postProp.imgUrl" alt="">
        <router-link :to="{ name: 'Profile', params: { profileId: postProp.creator.id } }">
            <div>
                <img class="creatorPic m-4 rounded-circle" :src="postProp.creator.picture" alt="">
                <p class="fs-2">{{ postProp.creator.name }}</p>
            </div>
        </router-link>
        <p class="fs-2">{{ postProp.title }}</p>
        <p class="fs-5">{{ postProp.body }}</p>

    </div>

    <!-- <div v-if="post.creatorId == account.id">
        <button @click="destroyPost()" class="btn btn-danger">Delete Post</button>
    </div> -->
</template>


<script>
import { AppState } from '../AppState.js';
import { Post } from '../models/Post';
import { computed, onMounted } from 'vue'
import Pop from '../utils/Pop';
import { useRoute, useRouter } from 'vue-router';
import { postsService } from '../services/PostsService';
import { logger } from '../utils/Logger';
export default {
    props: {
        postProp: { type: Post, required: true },


    },
    setup() {
        const route = useRoute();
        const router = useRouter();

        async function getPostById() {
            try {
                const postId = route.params.postId;

                await postsService.destroyPost(postId);

            } catch (error) {

                Pop.error(error)

            }

            onMounted(() => {
                logger.log('post from route', route.params.postId)
                getPostById();
            })
        }
        return {
            account: computed(() => AppState.account),

            posts: computed(() => AppState.posts)


            async destroyPost() {

                try {

                    const wantsToDelete = await Pop.confirm('are you sure you want to delete?')
                    if (!wantsToDelete) {
                        return;
                    }

                } catch (error) {
                    Pop.error(error)
                }

            }
        }
    }
}
</script>


<style lang="scss" scoped>
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