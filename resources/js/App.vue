<template>
    <navTop></navTop>
    <router-view></router-view>
</template>

<script>
import navTop from './components/navTop.vue';

export default {
    components: {
        navTop
    }   
}
</script>