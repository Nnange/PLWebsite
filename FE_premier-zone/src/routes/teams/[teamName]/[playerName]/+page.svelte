<script lang="ts">
	import { page } from '$app/state';
	import { onMount } from "svelte";
	import { getPlayerDetails } from '$service/ApiFunctions.service';
    import {playerData} from '$stores/teams.store';
	import CountUp from '$components/CountUp.svelte';


    let teamName: string;
    let playerName: string;
    let countryCode: string;

    onMount(async () => {
        teamName = page.params.teamName;
        playerName = page.params.playerName;
        try {
			const response = await getPlayerDetails(playerName);
            $playerData = response; // Assign the fetched data to playerData
            console.log($playerData);
            countryCode = $playerData[0].nation.split(' ')[0].toUpperCase().trim(); // Extract the first nation from the string
            $playerData[0].nation = $playerData[0].nation.split(' ')[1].toUpperCase().trim()
			
		} catch (error) {
			console.error('Failed to fetch players:', error);
		}
    });
</script>

<div>
    <div class="flex flex-col">
        <div class="wrapper border shadow-md pl-10">
            <img src="/images/playerAvatar.png" alt="Avatar" class="w-40 h-40 mr-4 border rounded-[5rem]" />
            <strong class="text-4xl text-white">{playerName}</strong>
            <!-- <strong class="row">{$playerData[0]?.nation}</strong>
            <p></p> -->
        </div>

        <div class="grid grid-cols-12 gap-4 mt-4">
            <div class="grid col-span-4 border rounded-lg shadow-md">
                <div class="grid grid-cols-2 gap-4 p-4">
                    <div class="col-span-1 ">Age</div>
                    <div class="col-span-1 text-end">{$playerData[0]?.age}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 p-4">
                    <div class="col-span-1 ">Team</div>
                    <div class="col-span-1 text-end">{$playerData[0]?.team}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 p-4">
                    <div class="col-span-1 ">Position</div>
                    <div class="col-span-1 text-end">{$playerData[0]?.pos}</div>
                </div>

            </div>
            <div class="grid grid-cols-4 col-span-8 gap-4">
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Starts</span>
                    <CountUp target={$playerData[0]?.starts} duration={1000} decimals={0} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Minutes Played</span>
                    <CountUp target={$playerData[0]?.min} duration={1000} decimals={0} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Goals</span>
                    <CountUp target={$playerData[0]?.gls} duration={1000} decimals={0} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Assists</span>
                    <CountUp target={$playerData[0]?.ast} duration={1000} decimals={0} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>XAG</span>
                    <CountUp target={$playerData[0]?.xag} duration={1000} decimals={1} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Expected Goals</span>
                    <CountUp target={$playerData[0]?.xg} duration={900} decimals={1} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Yellow Cards</span>
                    <CountUp target={$playerData[0]?.crdy} duration={1000} decimals={0} />
                </div>
                <div class="flex flex-col items-center justify-center border rounded-lg shadow-md p-1">
                    <span>Red Cards</span>
                    <CountUp target={$playerData[0]?.crdr} duration={1000} decimals={0} />
                </div>
            </div>
        </div>
    </div>



</div>

<style>
    .wrapper {
        display: flex;
        align-items: center;
        justify-content: start;
        margin-top: 1rem;
        height: 12rem;
        background: #4d69f7;
        background: linear-gradient(158deg, rgba(77, 105, 247, 1) 0%, rgba(140, 56, 169, 1) 32%, rgba(253, 29, 29, 1) 66%, rgba(252, 176, 69, 1) 91%);
    }
    
</style>