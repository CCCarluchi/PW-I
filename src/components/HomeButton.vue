<script>
export default {
    emits: ['home']
}
</script>

<template>
    <!-- Lanza un emmit para realizar la función -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <button class="home" v-on:click="$emit('home')"><i class="fa fa-home"></i></button>
</template>

<style>
    .home {
        margin-left: 10px;
        float: left;
        font-size: 14px;
        width: 20px;
        height: 20px;
        color:black;
        background-color: white;
    }
</style>
