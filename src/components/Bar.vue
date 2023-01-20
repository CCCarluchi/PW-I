<script>
import BackArrow from "./BackArrow.vue";
import HomeButton from "./HomeButton.vue";
import Logic from "../javascript/logic.js"
export default {
  components: { BackArrow, HomeButton },
 
  methods: {
    back() {
        Logic.back();
    },

    home() {
        this.$root.goHome();
    }
  }
};
</script>

<template>
  <BackArrow v-on:back="back"></BackArrow>
  <HomeButton v-on:home="home"></HomeButton>
</template>
