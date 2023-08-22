<script>
	import Navbar from '../../../components/Navbar.svelte';
	import Footer from '../../../components/Footer.svelte';

	import DisplaysList from '../../../components/DisplaysList.svelte';
</script>

<!-- Digisin Navbar -->
<Navbar />

<!-- Digisin Displays -->
<!-- svelte-ignore a11y-invalid-attribute -->
<div class="container mx-auto px-4 py-8 sm:px-6 md:px-8">
	<!-- Digisin Search -->
	<div>
		<h1
			class="text-mainColor2 font-bold text-4xl max-w-2xl md:text-5xl xl:text-6xl tracking-tight leading-none mb-4"
		>
			Displays
		</h1>
		<p class="text-black font-light text-xl">Create or find your digital signage here</p>
	</div>

	<div class="flex flex-col md:flex-row gap-4 py-6">
		<div class="flex-1">
			<label for="simple-search" class="sr-only">Search by ID</label>
			<div class="relative w-full">
				<input
					type="text"
					id="simple-search"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
					placeholder="Search ID..."
					required
				/>
			</div>
		</div>
		<div class="flex-1 mt-4 md:mt-0">
			<label for="simple-search" class="sr-only">Search by Name</label>
			<div class="relative w-full">
				<input
					type="text"
					id="simple-search"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
					placeholder="Search Name..."
					required
				/>
			</div>
		</div>
		<div class="flex-1 mt-4 md:mt-0">
			<label for="simple-search" class="sr-only">Search by Status</label>
			<div class="relative w-full">
				<input
					type="text"
					id="simple-search"
					class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-4 py-2.5"
					placeholder="Search Status..."
					required
				/>
			</div>
		</div>
		<div
			class="bg-mainColor2 rounded-lg border hover:bg-mainColor3 focus:ring-4 focus:outline-none flex justify-center items-center sm:flex-1 md:flex-none mt-4 md:mt-0"
		>
			<button type="submit" class="p-2.5 text-sm font-medium text-white">
				<svg
					class="w-4 h-4"
					aria-hidden="true"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 20 20"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
					/>
				</svg>
				<span class="sr-only">Search</span>
			</button>
		</div>
	</div>

	<!-- Digisin Add Link Action -->
	<div class="flex flex-col lg:flex-row justify-end pt-2 pb-8">
		<div class="flex-initial mb-2 lg:mb-0">
			<a
				href="/account/displays/addDisplays"
				class="w-full lg:w-auto inline-flex items-center justify-center px-5 py-3 mr-0 lg:mr-3 text-base font-medium text-center text-mainColor1 rounded-[2px] bg-mainColor2 focus:ring-4 focus:ring-primary-300"
			>
				Add Display
			</a>
		</div>
		<div class="flex-initial">
			<a
				href="/account/displays"
				class="w-full lg:w-auto inline-flex items-center justify-center px-5 py-3 mr-0 lg:mr-3 text-base font-medium text-center text-mainColor1 rounded-[2px] bg-red-600 focus:ring-4 focus:ring-primary-300"
			>
				Reset Search
			</a>
		</div>
	</div>

	<!-- Digisin List -->
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50">
				<tr>
					<th scope="col" class="px-6 py-3"> ID </th>
					<th scope="col" class="px-6 py-3"> Name </th>
					<th scope="col" class="px-6 py-3"> Link </th>
					<th scope="col" class="px-6 py-3"> Created At </th>
					<th scope="col" class="px-6 py-3"> Status </th>
					<th scope="col" class="px-6 py-3"> Action </th>
				</tr>
			</thead>
			<tbody>
				<DisplaysList
					idDisplays="0"
					namaDisplays="Maze Bank TV 0"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv0"
					createAtDisplays="September 9, 1945"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="1"
					namaDisplays="Maze Bank TV 1"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv1"
					createAtDisplays="September 9, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="2"
					namaDisplays="Maze Bank TV 2"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv2"
					createAtDisplays="August 2, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="3"
					namaDisplays="Maze Bank TV 3"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv3"
					createAtDisplays="September 24, 2017"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="4"
					namaDisplays="Maze Bank TV 4"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv4"
					createAtDisplays="December 29, 2012"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="5"
					namaDisplays="Maze Bank TV 5"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv5"
					createAtDisplays="September 9, 1945"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="6"
					namaDisplays="Maze Bank TV 6"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv6"
					createAtDisplays="September 9, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="7"
					namaDisplays="Maze Bank TV 7"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv7"
					createAtDisplays="August 2, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="8"
					namaDisplays="Maze Bank TV 8"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv8"
					createAtDisplays="September 24, 2017"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="9"
					namaDisplays="Maze Bank TV 9"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv9"
					createAtDisplays="December 29, 2012"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="10"
					namaDisplays="Maze Bank TV 10"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv10"
					createAtDisplays="September 9, 1945"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="11"
					namaDisplays="Maze Bank TV 11"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv11"
					createAtDisplays="September 9, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="12"
					namaDisplays="Maze Bank TV 12"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv12"
					createAtDisplays="August 2, 2013"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="13"
					namaDisplays="Maze Bank TV 13"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv13"
					createAtDisplays="September 24, 2017"
					statusDisplays="Active"
				/>
				<DisplaysList
					idDisplays="14"
					namaDisplays="Maze Bank TV 14"
					linkDisplays="http://127.0.0.1:5173/mazeBankTv14"
					createAtDisplays="December 29, 2012"
					statusDisplays="Active"
				/>
			</tbody>
		</table>

		<!-- Digisin List Pagination -->
		<nav class="flex items-center justify-between p-4" aria-label="Table navigation">
			<span class="text-sm font-normal text-gray-500"
				>Showing <span class="font-semibold text-gray-900">1-10</span> of
				<span class="font-semibold text-gray-900">1000</span></span
			>
			<ul class="inline-flex -space-x-px text-sm h-8">
				<li>
					<a
						href="#"
						aria-current="page"
						class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700"
						>1
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>2
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>3
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>4
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700"
						>5
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700"
						>Next
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>

<!-- Digisin Footer -->
<Footer />
