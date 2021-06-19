<template>
    <div class="my-10 flex justify-center">
        <form action="" class="w-6/12" @submit.prevent="submit">

			<!-- Create Job Listing -->
            <div class="mb-10">
				<h2 class="mb-4 text-2xl font-bold">Listing Details</h2>

				<div class="mb-4">
					<label for="job_title" class="inline-block mb-1 font-medium">Job Title</label>
					<input
						v-model="form.job_title"
						type="text"
						name="job_title"
						id="job_title"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						:class="{ 'border-red-500': errors['input.job_title'] }"
					>
					<div v-if="errors['input.job_title']" class="text-sm text-red-500 mt-1">
						{{ errors['input.job_title'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<label for="job_location" class="inline-block mb-1 font-medium">Job Location</label>
					<input
						v-model="form.job_location"
						type="text"
						name="job_location"
						id="job_location"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						:class="{ 'border-red-500': errors['input.job_location'] }"
					>
					<div v-if="errors['input.job_location']" class="text-sm text-red-500 mt-1">
						{{ errors['input.job_location'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<label for="job_link" class="inline-block mb-1 font-medium">Job Application URL</label>
					<input
						v-model="form.job_link"
						type="text"
						name="job_link"
						id="job_link"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						:class="{ 'border-red-500': errors['input.job_link'] }"
					>
					<div v-if="errors['input.job_link']" class="text-sm text-red-500 mt-1">
						{{ errors['input.job_link'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<label for="tags" class="inline-block mb-1 font-medium">Tags</label>
					<v-select
						v-model="form.tags"
						inputId="tags"
						label="title"
						:options="tags"
						:reduce="tag => tag.id"						
						multiple
						class="border-2 border-gray-200 rounded-lg"
						:class="{ 'border-red-500': errors['input.tags.connect'] }"
					/>
					<div v-if="errors['input.tags.connect']" class="text-sm text-red-500 mt-1">
						{{ errors['input.tags.connect'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<label for="company_name" class="inline-block mb-1 font-medium">Company Name</label>
					<input
						v-model="form.company_name"
						type="text"
						name="company_name"
						id="company_name"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						:class="{ 'border-red-500': errors['input.company_name'] }"
					>
					<div v-if="errors['input.company_name']" class="text-sm text-red-500 mt-1">
						{{ errors['input.company_name'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<label for="company_logo" class="inline-block mb-1 font-medium">Company Logo</label>
					<input
						v-model="form.company_logo"
						type="text"
						name="company_logo"
						id="company_logo"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						:class="{ 'border-red-500': errors['input.company_logo'] }"
					>
					<div v-if="errors['input.company_logo']" class="text-sm text-red-500 mt-1">
						{{ errors['input.company_logo'][0] }}
					</div>
				</div>

				<div class="mb-4">
					<input v-model="form.highlighted" type="checkbox" name="highlighted" id="highlighted">
					<label for="highlighted">Highlight listing</label>
				</div>

				<div class="mb-4">
					<input v-model="form.pinned" type="checkbox" name="pinned" id="pinned">
					<label for="pinned">Pinned</label>
				</div>
			</div>

			<!-- Create Account -->
			<div class="mb-10">
				<h2 class="mb-4 text-2xl font-bold">Create an account to manage your listing</h2>

				<div class="p-6 border-2 border-blue-500 rounded-lg">
					<div class="mb-4">
						<label for="email" class="inline-block mb-1 font-medium">Email</label>
						<input
							v-model="form.user_email"
							id="email"
							name="email"
							type="email"
							placeholder="you@somewhere.com"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
							:class="{ 'border-red-500': errors['input.user.create.email'] }"
						>
						<div v-if="errors['input.user.create.email']" class="text-sm text-red-500 mt-1">
							{{ errors['input.user.create.email'][0] }}
						</div>
					</div>

					<div class="mb-4">
						<label for="name" class="inline-block mb-1 font-medium">Name</label>
						<input
							v-model="form.user_name"
							type="text"
							name="name"
							id="name"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
							:class="{ 'border-red-500': errors['input.user.create.name'] }"
						>
						<div v-if="errors['input.user.create.name']" class="text-sm text-red-500 mt-1">
							{{ errors['input.user.create.name'][0] }}
						</div>
					</div>

					<div class="mb-4">
						<label for="password" class="inline-block mb-1 font-medium">Password</label>
						<input
							v-model="form.user_password"
							type="password"
							name="password"
							id="password"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
							:class="{ 'border-red-500': errors['input.user.create.password'] }"
						>
						<div v-if="errors['input.user.create.password']" class="text-sm text-red-500 mt-1">
							{{ errors['input.user.create.password'][0] }}
						</div>
					</div>
				</div>
			</div>

			<!-- Submit Button -->
            <button type="submit" class="p-4 bg-blue-500 text-white font-medium rounded-lg">
				Create Listing
			</button>
        </form>
    </div>
</template>

<script>
import ALL_TAGS from '@/graphql/AllTags.gql'
import CREATE_JOB_WITH_USER from '@/graphql/CreateJobWithUser.gql'

export default {
	data() {
		return {
			form: {
				job_title: '',
				job_location: '',
				job_link: '',
				tags: [],
				company_name: '',
				company_logo: '',
				highlighted: false,
				pinned: false,
				user_name: '',
				user_email: '',
				user_password: ''
			},
			errors: {}
		}
	},

	apollo: {
		tags: {
			query: ALL_TAGS
		}
	},

	methods: {
		async createListingWithUser() {
			await this.$apollo.mutate({
				mutation: CREATE_JOB_WITH_USER,
				variables: this.form
			}).catch(e => {
				this.errors = e.graphQLErrors[0].extensions.validation
			})

			await this.$auth.loginWith('laravelSanctum', {
				data: {
					email: this.form.user_email,
					password: this.form.user_password,
				}
			})

			if (Object.keys(this.errors).length === 0) {
				this.$router.replace({ name: 'index' })
			}
		},	

		submit() {
			this.createListingWithUser()
		}
	}
}
</script>
