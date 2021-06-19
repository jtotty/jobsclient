<template>
    <div class="mt-10 flex justify-center">
        <form action="" class="w-4/12" @submit.prevent="login">
            <h2 class="mb-4 text-2xl font-bold">Login</h2>

            <div class="mb-4">
                <label for="email" class="inline-block mb-1 font-medium">Email</label>
                <input
                    v-model="form.email"
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
                    placeholder="you@somewhere.com"
                >
            </div>

            <div class="mb-4">
                <label for="password" class="inline-block mb-1 font-medium">Password</label>
                <input
                    v-model="form.password"
                    type="password"
                    name="password"
                    id="password"
                    class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
                >
            </div>

            <button type="submit" class="p-4 bg-blue-500 text-white font-medium rounded-lg">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                email: '',
                password: ''
            }
        }
    },

    methods: {
        login() {
            try {
                this.$auth.loginWith('laravelSanctum', {
                    data: this.form
                })
            } catch (e) {
                console.log(e)
            }
        }
    }
}
</script>
