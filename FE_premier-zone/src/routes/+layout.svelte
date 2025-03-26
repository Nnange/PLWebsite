<script lang="ts">
	import Footer from '$components/Footer.svelte';
	import '../app.css';
	import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<div class="flex flex-col min-h-full">
	<Header />
	{@render children()}
	<Footer />
</div>
