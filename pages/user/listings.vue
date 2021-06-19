<template>
    <div>
        <div class="text-center py-10">
            <h1 class="text-4xl font-bold mb-2">Your listings</h1>
        </div>

        <div v-if="me" class="mt-10">
            <Job
                v-for="job in me.jobs"
                :key="job.id"
                :job="job"
            />
        </div>
    </div>
</template>

<script>
import USER_JOBS from '@/graphql/UserJobs.gql';

export default {
    apollo: {
        me: {
            query: USER_JOBS,
            fetchPolicy: 'network-only',
			prefetch: false
        }
    }
}
</script>
