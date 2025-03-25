<script lang="ts">
    import { page } from '$app/state';
    import { onMount } from 'svelte';
	import { getPlayersOfTeam } from '../../../service/ApiFunctions.service';

    let players = [];
    let teamName: string;

    onMount(async () => {
        teamName = page.params.teamName;
        try {
            const response = await getPlayersOfTeam(teamName);
            players = response;
            console.log(players);
        } catch (error) {
            console.error('Failed to fetch players:', error);
        }
    });
    
</script>


<div>
    this the page for a {teamName}
</div>