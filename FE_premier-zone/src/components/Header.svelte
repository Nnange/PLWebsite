<script lang="ts">
	import { Icon, Home, UserGroup, Flag, TableCells } from 'svelte-hero-icons';

</script>

<div class="grid grid-cols-12 content-center bg-(--league-color) text-white py-2 h-16">
	<img src="images/circularLogo.png" class="col-span-2 ml-5 w-9 sm:w-12 cursor-pointer" alt="premierLeagueLogo" />
	<div class="col-span-2 grid content-center justify-items-center">
		<a href="/" class="">
			<Icon
				src={Home}
				class="cursor-pointer hover:h-[50px] hover:w-[50px] w-5 sm:w-10 h-5 sm:h-10"
			/>
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
		<a href="/teams">
			<Icon src={UserGroup} class="cursor-pointer hover:h-[50px] hover:w-[50px] w-5 sm:w-10 h-5 sm:h-10" />
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
        <a href="/countries">
		    <Icon src={Flag} class="cursor-pointer hover:h-[50px] hover:w-[50px] w-5 sm:w-10 h-5 sm:h-10" />
        </a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
        <a href="/player_data">
			<Icon src={TableCells} class="cursor-pointer hover:h-[50px] hover:w-[50px] w-5 sm:w-10 h-5 sm:h-10" />
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-end">
		<img src="images/noRoomForRacism.png" class="w-15 sm:w-28 pr-4" alt="noRoomForRacism" />
	</div>
</div>