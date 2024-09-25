<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/resources">Resources</a></li>
	</ul>
</nav>


<slot />


<footer>
	<p>Built with SvelteKit.<p>
</footer>


<style>

	nav {
		margin: auto;
		padding: 10px;
		width: 75%;
	}

	ul {
		display: flex;
		list-style: none;
		margin: 0;
		padding: 0;
	}

	ul li {
		margin: 0;
		padding: 0;
		margin-right: 10px;
	}

	a {
		text-decoration: none;
		color: purple;
	}

	footer {
		margin: auto;
		width: 75%;
		text-align: center;
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
	}

</style>
