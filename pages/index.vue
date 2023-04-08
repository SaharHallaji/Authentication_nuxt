<template>
    <div class="d-flex flex-column justify-content-center align-items-center h-100 w-100">
        <h3 class="mb-5">
            Hi , Welcome To My Authentication Project
        </h3>
        <router-link class="mb-3" to="/login">Login</router-link>
        <router-link to="/signup">Signup</router-link>
    </div>
</template>

<script setup>

</script>

<style scoped lang="sass">
div:first-child
  height: 98vh !important

  a
    color: #00dc82
    text-decoration: none
    font-size: 20px
    border: 1px solid #00dc82
    border-radius: 10px
    padding: 10px 20px
    font-weight: 500

</style>