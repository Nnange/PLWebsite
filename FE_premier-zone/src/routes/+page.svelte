<script lang="ts">
    let isImageLoaded = false;

    

    function handleImageLoad() {
        isImageLoaded = true; // Set to true when the image finishes loading
    }
</script>


<div class="grid grid-cols-6 mb-10">
	<div class="col-span-1"></div>
	<div class="col-span-5 grip gap-y-4 ">
        <div class="">
            <img src="/images/premierLeagueLogo.png" alt="premierLeagueLogo" class="w-40 sm:w-63">
        </div>
        
		<p class="text-3xl sm:text-5xl">Welcome to </p>
		<p class="text-3xl sm:text-5xl">Premier Zone Fantasy!</p>
		<h4 class="text-sm sm:text-md my-4">Your home for everything Premier League related</h4>
        <a href="/teams" class="cursor-pointer border p-3  
            border-orange-500 rounded-lg text-orange-500 hover:bg-orange-500 
            hover:text-white active:bg-orange-600">
            Get Started
        </a>
	</div>
</div>


