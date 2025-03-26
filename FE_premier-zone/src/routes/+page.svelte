<script lang="ts">
    let isImageLoaded = false;

    

    function handleImageLoad() {
        isImageLoaded = true; // Set to true when the image finishes loading
    }
</script>


<div class="grid grid-cols-6 mb-10">
	<div class="col-span-1"></div>
	<div class="col-span-5 grip gap-y-4 ">
        <!-- <div class="border">
            <img src="images/premierLeagueLogo.png" alt="premierLeagueLogo" width="250">
        </div> -->
        <div class=" relative">
            <!-- Spinner -->
            {#if !isImageLoaded}
                <div class="absolute inset-0 flex items-center  bg-white">
                    <div class="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-gray-500"></div>
                </div>
            {/if}

            <!-- Image -->
            <img
                src="images/premierLeagueLogo.png"
                alt="premierLeagueLogo"
                width="250"
                on:load={handleImageLoad}
                class:opacity-0={!isImageLoaded}
                class:opacity-100={isImageLoaded}
                class="transition-opacity duration-500"
            />
        </div>
		<p class="text-5xl">Welcome to </p>
		<p class="text-5xl">Premier Zone Fantasy!</p>
		<h4 class="text-md mt-4">Your home for everything Premier League related</h4>
        <a href="/teams" class="cursor-pointer">
            <button type="button" class="border p-3 mt-4 border-orange-500 text-orange-500">Get Started</button>
        </a>
	</div>
</div>


