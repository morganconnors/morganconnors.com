<script lang="ts">
	import * as config from '$lib/config'

	export let data
</script>

<div class="centeredDiv">

	<h1>Blog</h1>
	<p>This is a work in progress, I don't actually have any content to put here yet.</p>

	<div id="blogPosts">
		<ul class="posts">
			{#each data.posts as post}
				<li class="post">
					<a href={post.slug} class="title">{post.title}
					<p class="date">{post.date}</p>
					<p class="description">{post.description}</p></a>
				</li>
			{/each}
		</ul>
	</div>


</div>

<style>

	.centeredDiv {
		margin: auto;
		width: 75%;
	}

	#blogPosts {
	}

	.posts {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.post {
		margin: 0;
		padding: 0;
		margin-right: 10px;
	}

	.post a {
		display: block;
		height: 100%;
		width: 100%;
		color: purple;
		text-decoration: none;
	}
	
	.post p {

	}

</style>
