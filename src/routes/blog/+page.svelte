<script lang="ts">
	import * as config from '$lib/config'

	export let data
</script>

<div class="centeredDiv">

	<h1>Blog</h1>
	<p>I'll write about software, hardware, hiking, and whatever else holds my interest here.</p>

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
	}
	
	.post p {

	}

</style>
