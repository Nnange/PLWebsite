<script>
    import { onMount } from 'svelte';
    import { tweened } from 'svelte/motion';
    import { linear } from 'svelte/easing';
  
    // Props: target number and duration (in ms)
    export let target = 0;
    export let duration = 2000; // 2 seconds
    export let decimals = 1; // Default to 1 decimal place (e.g., 7.7)
  
    // Create a tweened store for smooth animation
    const count = tweened(0, {
      duration,
      easing: linear
    });
  
    // Start animation when component mounts
    onMount(() => {
      count.set(target); // Animate to target
      return () => count.set(0); // Reset on unmount (optional)
    });
  </script>
  
  {#if decimals == 0}
    <strong class="text-5xl text-(--league-color)">{$count.toFixed(decimals)}</strong>
  {:else}
    <strong class="text-5xl text-(--league-color)">{$count.toFixed(decimals)}</strong>
  {/if}
  <style>

  </style>