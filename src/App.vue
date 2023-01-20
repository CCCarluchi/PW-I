<script>
export default {
  methods: {
    goHome() {
      location.replace("/Home");
    }
  }
};
</script>

<template>
  <router-view></router-view>
</template>