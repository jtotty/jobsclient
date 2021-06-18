<template>
  <header class="py-6 flex items-center justify-between">
    <nuxt-link :to="{ name: 'index' }" exact-active-class="text-blue-500">Jobs</nuxt-link>
    <div class="flex item-center flex-wrap">
      <span class="mx-4 font-bold">James</span>
      <nuxt-link :to="{ name: 'login' }" exact-active-class="text-blue-500" class="mx-4">Login</nuxt-link>
      <a class="mx-4">Manage Listings</a>
      <a class="mx-4">Logut</a>
      <a class="ml-4">Post a Job</a>
    </div>
  </header>
</template>

<script>
export default {

}
</script>