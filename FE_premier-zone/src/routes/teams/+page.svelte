<script lang="ts">
	import { onMount } from 'svelte';
	import { getAllPlayers } from '../../service/ApiFunctions.service';

	onMount(async () => {
		getAllPlayers().then((res) => {
			console.log(res);
		});
		console.log('teams page');
	});
</script>

<div class="bg-[#74e4a5] grid content-center justify-items-center">
	<div class="w-[50%] gap-y-3">
        <p class="text-5xl">Teams</p>
        
        <input
            type="text"
            placeholder="search for a Team"
            class="m-2 w-1/2 rounded-lg border-2 border-black bg-white p-2"
        />
    </div>

</div>
