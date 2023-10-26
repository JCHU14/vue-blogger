<template>
    <div class="text-dark text-center m-5">
        <img class="imageBlock borderBox" :src="postProp.imgUrl" alt="">
        <div>
            <img class="creatorPic m-4 rounded-circle" :src="postProp.creator.picture" alt="">

        </div>
        <p class="fs-2">{{ postProp.title }}</p>
        <p class="fs-5">{{ postProp.body }}</p>
    </div>
</template>


<script>
import { Post } from '../models/Post';

export default {
    props: {
        postProp: { type: Post, required: true },
    },
    setup() {
        return {

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