<script lang="ts">
	import '../app.css';
	import Header from '../components/Header.svelte';
	let { children } = $props();
</script>

<div>
	<Header />
	{@render children()}
</div>
