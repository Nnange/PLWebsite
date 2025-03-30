<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from "svelte";
	import { getPlayerDetails } from '$service/ApiFunctions.service';

    let teamName: string;
    let playerName: string;

    onMount(async () => {
        teamName = page.params.teamName;
        playerName = page.params.playerName;
        try {
			const response = await getPlayerDetails(playerName);
            console.log(response);
			
		} catch (error) {
			console.error('Failed to fetch players:', error);
		}
    });
</script>

<div>
    <h1>Welcome to the player page</h1>
    <p>You are viewing details for <strong>{playerName}</strong> from team <strong>{teamName}</strong>.</p>
</div>