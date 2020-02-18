<template>
    <div class="sidenav-container">

        <!-- <div v-if="toggleSidebar" class="backdrop" @click="$store.dispatch('nav/toggleSidebar')"></div>

        <transition name="slide-side">
            <div v-if="toggleSidebar" class="sidenav">
                <app-links></app-links>
            </div>
        </transition> -->
        <div class="h-screen w-1/4 bg-red-900">dsds</div>
        

    </div>
</template>

<script>
    import AppLinks from '~/components/appLinks'
    export default {
      data () {
        return {
          toggleSidebar: false
        }
      },
        components: { AppLinks },
        computed: {
            // toggleSidebar() {
            //     return this.$store.state.toggleSidebar
            // }
        }
    }
</script>


<style scoped>
    .sidenav-container {
        height: 100%;
        width: 100%;
    }
    .sidenav {
        height: 100%;
        width: 300px;
        background-color: #d6d6d6;
        z-index: 10000;
        position: fixed;
        top: 0;
        left: 0;
        box-sizing: border-box;
        padding: 30px;
    }
    .backdrop {
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        z-index: 1000;
        position: fixed;
        top: 0;
        left: 0;
    }
    .slide-side-enter-active,
    .slide-side-leave-active {
        transition: all 0.3s ease-out;
    }
    .slide-side-enter,
    .slide-side-leave-to {
        transform: translateX(-100%);
    }
</style>