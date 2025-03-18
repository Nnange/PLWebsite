<script lang="ts">
	import { Icon, Home, UserGroup, Flag, TableCells } from 'svelte-hero-icons';

	const word: string = 'Premier League';
</script>

<div class="grid grid-cols-12 content-center bg-(--league-color) text-white">
	<img src="images/circularLogo.png" class="col-span-2 ml-5" alt="premierLeagueLogo" width="80" />
	<div class="col-span-2 grid content-center justify-items-center">
		<a href="/home" class="">
			<Icon
				src={Home}
				size="40"
				class="cursor-pointer hover:h-[50px] hover:w-[50px]"
			/>
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
		<a href="/teams">
			<Icon src={UserGroup} size="40" class="cursor-pointer hover:h-[50px] hover:w-[50px]" />
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
        <a href="/countriesd">
		    <Icon src={Flag} size="40" class="cursor-pointer hover:h-[50px] hover:w-[50px]" />
        </a>
	</div>
	<div class="col-span-2 grid content-center justify-items-center">
        <a href="/data">
			<Icon src={TableCells} size="40" class="cursor-pointer hover:h-[50px] hover:w-[50px]" />
		</a>
	</div>
	<div class="col-span-2 grid content-center justify-items-end">
		<img src="images/noRoomForRacism.png" class="w-28 pr-4" alt="noRoomForRacism" />
	</div>
</div>