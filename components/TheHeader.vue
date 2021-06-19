<template>
    <header class="py-6 flex items-center justify-between">
        <nuxt-link :to="{ name: 'index' }" exact-active-class="text-blue-500">Jobs</nuxt-link>

        <div class="-mx-4 flex item-center flex-wrap">
            <a class="mx-4" exact-active-class="text-blue-500">Post a Job</a>

            <template v-if="$auth.loggedIn">
                <span class="mx-4 font-bold">{{ $auth.user.name }}</span>
                <a class="mx-4">Manage Listings</a>
                <a class="mx-4" @click.prevent="logout">Logut</a>
            </template>

            <template v-if="!$auth.loggedIn">
                <nuxt-link
                    :to="{ name: 'login' }"
                    exact-active-class="text-blue-500"
                    class="mx-4"
                >
                    Login
                </nuxt-link>
            </template>
        </div>
    </header>
</template>

<script>
export default {
    methods: {
        async logout() {
            await this.$auth.logout()

            this.$router.replace({ name: 'index'})
        }
    }
}
</script>
