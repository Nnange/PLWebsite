<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from 'svelte';
	import { getPlayersOfTeam } from '../../../service/ApiFunctions.service';

	let players: any[] = [];
	let rearrange: boolean = false; // to check if the button is clicked
	let teamName: string;

    const categories: {
			Goalkeepers: any[];
			Defenders: any[];
			Midfielders: any[];
			Strikers: any[];
		} = {
			Goalkeepers: [],
			Defenders: [],
			Midfielders: [],
			Strikers: []
		};

	onMount(async () => {
		teamName = page.params.teamName;
		try {
			const response = await getPlayersOfTeam(teamName);
			players = response;
			console.log(categorizePlayers(players));
            console.log(players.length);
		} catch (error) {
			console.error('Failed to fetch players:', error);
		}
	});

	function categorizePlayers(players: any[]) {
		

        players.forEach(player => {
            switch (player.pos) {
                case 'GK':
                    categories.Goalkeepers.push(player);
                    break;
                case 'DF':
                    categories.Defenders.push(player);
                    break;
                case 'MF':
                    categories.Midfielders.push(player);
                    break;
                case 'FW':
                    categories.Strikers.push(player);
                    break;
                default:
                    player.pos = player.pos.split(',')[0].trim();
                    switch (player.pos) {
                        case 'GK':
                            categories.Goalkeepers.push(player);
                            break;
                        case 'DF':
                            categories.Defenders.push(player);
                            break;
                        case 'MF':
                            categories.Midfielders.push(player);
                            break;
                        case 'FW':
                            categories.Strikers.push(player);
                            break;
                        default:  
                    }
            }
        });

        return categories;
    }
</script>

<div class="mb-10">
	<div class="my-4 flex flex-col items-center justify-center">
		<img src={`/teams/${teamName}.png`} alt={`${teamName} logo`} width="100px" />
		<h1 class="text-4xl">{teamName}'s squad</h1>
	</div>
	{#if players}
		{#if !rearrange}
			<button
				type="button"
				class="my-4 ml-4 cursor-pointer rounded-lg border border-orange-500 p-2 text-orange-500"
				onclick={() => {
					rearrange = !rearrange;
					console.log(players);
				}}
			>
				Rearrange according to their positions
			</button>

			<div class="grid grid-cols-3 gap-4 px-4">
				{#each players as player}
					<div class="grid grid-cols-2 rounded border p-4">
						<p>{player.name}</p>
						<p class="text-end">{player.pos}</p>
					</div>
				{/each}
			</div>
		{/if}
	{:else}
		<p class="text-5xl">Loading...</p>
	{/if}

	{#if rearrange}
		<button
			type="button"
			class="my-4 ml-4 cursor-pointer rounded-lg border border-orange-500 p-2 text-orange-500"
			onclick={() => {
				rearrange = !rearrange;
				console.log(players);
			}}
		>
			Go back to default listing
		</button>
		<div class="grid grid-cols-4">
            <div class="text-center">
                <strong class="text-2xl underline">Goalkeepers</strong>
                {#each categories.Goalkeepers as player}
                    <div class=" ">
                        <p>{player.name}</p>
                    </div>
                {/each}
            </div>
            <div class="text-center">
                <strong class="text-2xl underline">Defenders</strong>
                {#each categories.Defenders as player}
                    <div class=" ">
                        <p>{player.name}</p>
                    </div>
                {/each}
            </div>
            <div class="text-center">
                <strong class="text-2xl underline">Midfielders</strong>
                {#each categories.Midfielders as player}
                    <div class=" ">
                        <p>{player.name}</p>
                    </div>
                {/each}
            </div>
            <div class="text-center">
                <strong class="text-2xl underline">Strikers</strong>
                {#each categories.Strikers as player}
                    <div class=" ">
                        <p>{player.name}</p>
                    </div>
                {/each}
            </div>
        </div>
	{/if}
</div>
