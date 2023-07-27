<script>
	import Navbar from '../../../components/Navbar.svelte';
	import Footer from '../../../components/Footer.svelte';
</script>

<Navbar />

<!-- Hero -->
<div class="w-full h-full flex flex-col lg:flex-row">
	<div class="w-full lg:w-2/3 flex items-center justify-center p-8 bg-white dark:bg-gray-800">
		<div class="item-body px-4 my-auto">
			<h1
				class="text-mainColor2 max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl"
			>
				Introduce Your Product Quickly & Effectively
			</h1>
			<p class="text-black max-w-2xl mb-6 font-light lg:mb-8 md:text-lg lg:text-xl">
				Don't miss out on the chance to make a lasting impact. Build your digital signage strategy
				today and let your message shine bright, capturing the attention of everyone who passes by.
			</p>
			<a
				href="/account/home"
				class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-[2px] bg-mainColor2 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
			>
				Try Now
			</a>
			<a
				href="/account/home"
				class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-black border border-black rounded-[2px] hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
			>
				Read The Docs
			</a>
		</div>
	</div>
	<div class="hidden lg:block w-full lg:w-1/3 justify-center">
		<img
			class="w-full h-auto rounded-l-lg lg:rounded-l-lg"
			src="/asset/asset_main_content/hero1.svg"
			alt="Flowbite Logo"
		/>
	</div>
</div>

<!-- Section 1 -->
<div class="container mx-auto px-4 py-8 sm:px-6 md:px-8">
	<div>
		<h1 class="text-4xl font-bold mb-4">Features</h1>
		<p class="text-xl text-gray-600">
			Our app Digisin comes equipped with a range of exciting features that enhance your digital
			experience.
		</p>
	</div>

	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-7">
		<div>
			<div class="bg-mainColor2 rounded-[10px] shadow-md">
				<img
					class="w-full h-full object-cover rounded-[10px]"
					src="http://via.placeholder.com/1366x1080"
					alt="adv"
				/>

				<!-- Card Content -->
				<p class="text-2xl font-inter font-bold text-mainColor1 text-center p-6">Simple</p>
			</div>
		</div>
		<div>
			<div class="bg-mainColor2 rounded-[10px] shadow-md">
				<img
					class="w-full h-full object-cover rounded-[10px]"
					src="http://via.placeholder.com/1366x1080"
					alt="adv"
				/>

				<!-- Card Content -->
				<p class="text-2xl font-inter font-bold text-mainColor1 text-center p-6">Fast</p>
			</div>
		</div>
		<div>
			<div class="bg-mainColor2 rounded-[10px] shadow-md">
				<img
					class="w-full h-full object-cover rounded-[10px]"
					src="http://via.placeholder.com/1366x1080"
					alt="adv"
				/>

				<!-- Card Content -->
				<p class="text-2xl font-inter font-bold text-mainColor1 text-center p-6">Easy To Use</p>
			</div>
		</div>
	</div>
</div>

<!-- Section 2 -->
<div class="container mx-auto px-4 py-8 sm:px-6 md:px-8 flex">
	<div class="w-1/3 pr-2">
		<h1 class="text-4xl font-bold mb-4">Our Digisin</h1>
		<p class="text-xl text-gray-600">
			Our app Digisin comes equipped with a range of exciting features that enhance your digital
			experience.
		</p>
	</div>
	<div class="w-2/3">
		<div class="bg-mainColor2 rounded-[10px] shadow-md">
			<img
				class="w-full h-96 object-cover rounded-[10px]"
				src="http://via.placeholder.com/1366x1080"
				alt="adv"
			/>
		</div>
	</div>
</div>

<Footer />
