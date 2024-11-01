export type Categories = 'sveltekit' | 'svelte' | 'sample' | 'notsample'

export type Post = {
	title: string
	slug: string
	description: string
	date: string
	categories: Categories[]
	published: boolean
}
