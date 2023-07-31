<script>
	import Navbar from '../../../components/Navbar.svelte';
	import Footer from '../../../components/Footer.svelte';
</script>

<!-- Digisin Navbar -->
<Navbar />

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
	<div class="flex justify-end pt-2 pb-8">
		<div class="flex-initial">
			<a
				href="/account/displays/addDisplays"
				class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-mainColor1 rounded-[2px] bg-mainColor2 focus:ring-4 focus:ring-primary-300"
			>
				Add Display
			</a>
		</div>
		<div class="flex-initial">
			<a
				href="/account/displays"
				class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-mainColor1 rounded-[2px] bg-red-600 focus:ring-4 focus:ring-primary-300"
			>
				Reset Search
			</a>
		</div>
	</div>

	<!-- Digisin List -->
	<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
		<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
			<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
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
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 1 </td>
					<td class="px-6 py-4"> Maze Bank TV 1 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv1 </td>
					<td class="px-6 py-4"> September 9, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 2 </td>
					<td class="px-6 py-4"> Maze Bank TV 2 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv2 </td>
					<td class="px-6 py-4"> August 2, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 3 </td>
					<td class="px-6 py-4"> Maze Bank TV 3 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv3 </td>
					<td class="px-6 py-4"> September 24, 2017 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 4 </td>
					<td class="px-6 py-4"> Maze Bank TV 4 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv4 </td>
					<td class="px-6 py-4"> December 29, 2012 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 1 </td>
					<td class="px-6 py-4"> Maze Bank TV 1 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv1 </td>
					<td class="px-6 py-4"> September 9, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 2 </td>
					<td class="px-6 py-4"> Maze Bank TV 2 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv2 </td>
					<td class="px-6 py-4"> August 2, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 3 </td>
					<td class="px-6 py-4"> Maze Bank TV 3 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv3 </td>
					<td class="px-6 py-4"> September 24, 2017 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 4 </td>
					<td class="px-6 py-4"> Maze Bank TV 4 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv4 </td>
					<td class="px-6 py-4"> December 29, 2012 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 1 </td>
					<td class="px-6 py-4"> Maze Bank TV 1 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv1 </td>
					<td class="px-6 py-4"> September 9, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 2 </td>
					<td class="px-6 py-4"> Maze Bank TV 2 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv2 </td>
					<td class="px-6 py-4"> August 2, 2013 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 3 </td>
					<td class="px-6 py-4"> Maze Bank TV 3 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv3 </td>
					<td class="px-6 py-4"> September 24, 2017 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
				<tr
					class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
				>
					<td class="px-6 py-4"> 4 </td>
					<td class="px-6 py-4"> Maze Bank TV 4 </td>
					<td class="px-6 py-4"> http://127.0.0.1:5173/mazeBankTv4 </td>
					<td class="px-6 py-4"> December 29, 2012 </td>
					<td class="px-6 py-4"> Active </td>
					<td class="px-6 py-4">
						<a href="#" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a
						>
					</td>
				</tr>
			</tbody>
		</table>

		<!-- Digisin List Pagination -->
		<nav class="flex items-center justify-between p-4" aria-label="Table navigation">
			<span class="text-sm font-normal text-gray-500 dark:text-gray-400"
				>Showing <span class="font-semibold text-gray-900 dark:text-white">1-10</span> of
				<span class="font-semibold text-gray-900 dark:text-white">1000</span></span
			>
			<ul class="inline-flex -space-x-px text-sm h-8">
				<li>
					<a
						href="#"
						aria-current="page"
						class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
						>1
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>2
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>3
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>4
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>5
					</a>
				</li>
				<li>
					<a
						href="#"
						class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
						>Next
					</a>
				</li>
			</ul>
		</nav>
	</div>
</div>
