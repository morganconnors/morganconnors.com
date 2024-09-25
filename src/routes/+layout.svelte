<nav>
	<ul>
		<li><a href="/">Home</a></li>
		<li><a href="/blog">Blog</a></li>
		<li><a href="/resources">Resources</a></li>
	</ul>
</nav>

<style>

	nav {
		margin: auto;
		padding: 10px;
		width: 40%;
	}

	ul {
		display: flex;
		list-style: none;
	}

	li {
		margin-right: 20px;
	}

	a {
		text-decoration: none;
		color: purple;
	}

</style>


<slot />
