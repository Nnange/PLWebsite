<script lang="ts">
	import { onMount } from 'svelte';
	import { getAllPlayers } from '../../service/ApiFunctions.service';
    import teamData from '../../data/teams.json';

    let isVisible = false;

	onMount(async () => {
		getAllPlayers().then((res) => {
			console.log(res);
            console.log(teamData.teams);  
		});
		console.log('teams page');

         // Trigger the fade-in effect after the component is mounted
         setTimeout(() => {
            isVisible = true;
        }, 200); // Delay to ensure the transition is visible
	});
</script>

<div class="bg-[#74e4a5] grid content-center justify-items-center gap-y-4">
	<div class="w-[50%] grid content-center justify-items-center">
        <p class="text-5xl text-white">Teams</p>
        
        <input
            type="text"
            placeholder="search for a Team"
            class="m-2 w-1/2 rounded-lg border-2 border-black bg-white p-2"
        />
    </div>

    
    <div class="grid grid-cols-9 w-[50%] transition-all duration-500 transform"
        class:opacity-0={!isVisible}
        class:opacity-100={isVisible}
        class:translate-y-9={!isVisible}
        class:translate-y-0={isVisible}
    >
        {#each teamData.teams as team}
            <div class="col-span-3 grid content-center justify-items-center gap-y-2">
                <img src={team.cover} alt={team.title} width="100"/>
                <p>{team.title}</p>
            </div>
        {/each}
    </div>

</div>
