<script lang="ts">
	import { onMount } from 'svelte';
	import { getAllPlayers } from '../../service/ApiFunctions.service';
	import teamData from '../../data/teams.json';
	import { teams } from '$stores/teams.store';
	import { goto } from '$app/navigation'; // Import goto for navigation

	let isVisible = false;
	let searchQuery = '';

	$teams = teamData.teams;

	onMount(async () => {
		// Trigger the fade-in effect after the component is mounted
		setTimeout(() => {
			isVisible = true;
		}, 200); // Delay to ensure the transition is visible
	});

	function searchTeams() {
		$teams = teamData.teams.filter((team) =>
			team.title.toLowerCase().includes(searchQuery.toLowerCase())
		);
	}

	function handleOnClickTeam(teamName: string) {
		goto(`/teams/${teamName}`); // Navigate to the specific team's route
	}
</script>

<div class="grid content-center justify-items-center gap-y-4 bg-[#74e4a5]">
	<div class="grid w-[50%] content-center justify-items-center">
		<p class="text-5xl">Teams</p>

		<input
			type="text"
			placeholder="search for a Team"
			class="m-2 rounded-lg border-2 border-black bg-white p-2 md:w-1/2"
			bind:value={searchQuery}
			on:input={searchTeams}
		/>
	</div>

	<div
		class="grid transform grid-cols-9 transition-all duration-500 md:w-[50%]"
		class:opacity-0={!isVisible}
		class:opacity-100={isVisible}
		class:translate-y-9={!isVisible}
		class:translate-y-0={isVisible}
	>
		{#each $teams as team}
			<button
				type="button"
				class="col-span-3 grid content-center justify-items-center"
				on:click={() => handleOnClickTeam(team.officialName)}
			>
				<img
					src={team.cover}
					alt={team.title}
					class="h-24 w-24 cursor-pointer object-contain pt-4 md:h-34 md:w-34"
				/>
				<strong class="cursor-pointer">{team.title}</strong>
			</button>
		{/each}
	</div>
</div>
