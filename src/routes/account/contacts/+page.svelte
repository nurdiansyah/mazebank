<script>
	import Navbar from '../../../components/Navbar.svelte';
	import Footer from '../../../components/Footer.svelte';
</script>

<!-- Digisin Navbar -->
<Navbar />

<!-- Digisin Contacts -->
<div class="container mx-auto px-4 py-8 sm:px-6 md:px-8">
	<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
		<div class="col-span-1">
			<div>
				<h1
					class="text-mainColor2 font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl tracking-tight leading-none mb-4"
				>
					Contact Us
				</h1>
				<p class="text-black font-light text-lg sm:text-xl">
					Write a message via the column below to communicate with us
				</p>
			</div>
			<form action="#" class="mt-4">
				<div class="mb-4">
					<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Message
					</label>
					<textarea
						id="message"
						name="message"
						rows="4"
						class="h-40 sm:h-56 bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-mainColor2 focus:border-mainColor2 block w-full p-2.5"
						placeholder="Email Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
					/>
				</div>
				<button
					type="submit"
					class="w-full text-white bg-mainColor2 hover:bg-mainColor2 focus:ring-4 focus:outline-none focus:ring-mainColor2 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-mainColor2 dark:hover:bg-mainColor2 dark:focus:ring-mainColor2"
				>
					Submit
				</button>
			</form>
		</div>
		<div class="col-span-1 mt-8 sm:mt-0">
			<div class="w-full h-full flex flex-col justify-center items-center">
				<img
					src="/asset/asset_header/Logo_Maze-Bank.png"
					alt="logo"
					class="mb-4 max-w-full h-32 sm:h-40"
				/>
				<div class="text-center">
					<h1 class="text-lg sm:text-2xl font-bold mb-2">Digisin</h1>
					<p class="text-base sm:text-lg text-gray-600">12 Mark okoye close, Asokoro, Abuja, Nigeria.</p>
					<p class="text-base sm:text-lg text-gray-600">digisin@gmail.com</p>
					<p class="text-base sm:text-lg text-gray-600">+234-815-3679-267</p>
				</div>
			</div>
		</div>
	</div>
</div>

<!-- Digisin Footer -->
<Footer />
