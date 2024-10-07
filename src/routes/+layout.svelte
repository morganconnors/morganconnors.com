<script lang="ts">
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	import '../app.css'
</script>

<Header />

<div id="page-container">
	<div id="content-wrap">

		<slot />
	
	</div>

<Footer />

</div>


<style>

	#page-container {
		position: relative;
		min-height: 100vh;
	}

	#content-wrap {
		padding-bottom: 2.5rem;
	}

</style>
