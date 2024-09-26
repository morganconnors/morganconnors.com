<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/resources">Resources</a></li>
	</ul>
</nav>

<div id="page-container">
	<div id="content-wrap">

		<slot />
	
	</div>

	<footer>
		<a href="https://www.linkedin.com/in/morgan-connors">LinkedIn</a>
		<a href="https://www.github.com/morganconnors">Github</a>
		<a href="mailto:contact@morganconnors.com">Email</a>
		<p>Built with SvelteKit.<p>
	</footer>
</div>


<style>

	nav {
		margin: auto;
		padding: 2.5vh;
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

	#page-container {
		position: relative;
		min-height: 100vh;
	}

	#content-wrap {
		padding-bottom: 2.5rem;
	}

	footer {
		margin: auto;
		width: 100%;
		text-align: center;
		position: absolute;
		bottom: 0;
		height: 2.5rem;
	}

	footer a {
		padding-right: 10px;
	}

</style>
