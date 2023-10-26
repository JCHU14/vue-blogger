<template>
    <div class="container-fluid">
        <div v-if="profile" class="row">
            <div class="col-12">
                <img class="img-fluid coverImg" :src="profile.coverImg" alt="">
            </div>
            <div class="row">
                <div class="col-12 text-center">
                    <img class="rounded-circle profileImg p-2 m-3" :src="profile.picture" alt="">
                    <h1>{{ profile.name }}</h1>
                    <p>{{ profile.bio }}</p>
                </div>
            </div>
            <div class="row">
                <div class="col-12"></div>
            </div>


        </div>

    </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { logger } from '../utils/Logger.js';
import { profileService } from '../services/ProfileService.js';
import { useRoute } from "vue-router"


export default {
    setup() {
        onMounted(() => {
            getProfile()
        })
        const route = useRoute()
        async function getProfile() {
            const profileId = route.params.profileId
            logger.log(profileId)
            await profileService.getProfile(profileId)
        }

        return {
            profile: computed(() => AppState.profile),
            posts: computed(() => AppState.posts),

        }
    }
};
</script>


<style lang="scss" scoped>
.profileImg {
    height: 10rem;
    width: 10rem;

}

.coverImg {
    object-fit: cover;
    object-position: center;
    max-height: 60vh;
    width: 100%;

}
</style>