<template>
    <div class="my-10 flex justify-center">
        <form action="" class="w-6/12">
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
					>
				</div>

				<div class="mb-4">
					<label for="job_location" class="inline-block mb-1 font-medium">Job Location</label>
					<input
					v-model="form.job_location"
						type="text"
						name="job_location"
						id="job_location"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
					>
				</div>

				<div class="mb-4">
					<label for="job_link" class="inline-block mb-1 font-medium">Job Application URL</label>
					<input
						v-model="form.job_link"
						type="text"
						name="job_link"
						id="job_link"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
					>
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
					/>
				</div>

				<div class="mb-4">
					<label for="company_name" class="inline-block mb-1 font-medium">Company Name</label>
					<input
						v-model="form.company_name"
						type="text"
						name="company_name"
						id="company_name"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
					>
				</div>

				<div class="mb-4">
					<label for="company_logo" class="inline-block mb-1 font-medium">Company Logo</label>
					<input
						v-model="form.company_logo"
						type="text"
						name="company_logo"
						id="company_logo"
						class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
					>
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

			<div class="mb-10">
				<h2 class="mb-4 text-2xl font-bold">Create an account to manage your listing</h2>

				<div class="bg-gray-400 p-6 rounded-lg">
					<div class="mb-4">
						<label for="email" class="inline-block mb-1 font-medium">Email</label>
						<input
							v-model="form.user_email"
							type="email"
							name="email"
							id="email"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
							placeholder="you@somewhere.com"
						>
					</div>

					<div class="mb-4">
						<label for="name" class="inline-block mb-1 font-medium">Name</label>
						<input
							v-model="form.user_name"
							type="text"
							name="name"
							id="name"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						>
					</div>

					<div class="mb-4">
						<label for="password" class="inline-block mb-1 font-medium">Password</label>
						<input
							v-model="form.user_password"
							type="password"
							name="password"
							id="password"
							class="bg-gray-200 border-2 border-gray-200 rounded-lg w-full h-10 px-4"
						>
					</div>
				</div>
			</div>

            <button type="submit" class="p-4 bg-blue-500 text-white font-medium rounded-lg">
				Create Listing
			</button>
        </form>
    </div>
</template>

<script>
import ALL_TAGS from '@/graphql/AllTags.gql'

export default {
	data () {
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
			}
		}
	},

	apollo: {
		tags: {
			query: ALL_TAGS
		}
	}
}
</script>
