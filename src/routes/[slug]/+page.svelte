<script lang="ts">
	export let data
	import { title } from '$lib/config.ts'
</script>

<svelte:head>
	<title>{data.meta.title} {title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={data.meta.title} />
</svelte:head>

<div class="centeredDiv">
	<hgroup class="title-date">
		<h1>{data.meta.title}</h1>
		<p>Published at {data.meta.date}</p>
	</hgroup>

	<div class="tags">
		{#each data.meta.categories as category}
			<span class="categories">&num;{category}</span>
		{/each}
	</div>

	<div class="body">
		<svelte:component this={data.content} />
	</div>
</div>


<style>

	.categories {
		padding-right: 5px;
	}

</style>
