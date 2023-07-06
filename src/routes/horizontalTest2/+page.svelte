<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<div
	class="flex text-white overflow-x-hidden"
	style="width: 100vw; height: 100vh; display: flex; flex-direction: column; align-items: center;"
>
	<div class="" style="max-width: 80%;">
		<header class="bg-mainColor4 px-5 py-7">
			<div class="flex flex-col items-center md:flex-row">
				<div class="w-full md:w-1/2 flex items-center justify-start">
					<img src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" class="h-12" />
					<div class="item-body px-4 my-auto">
						<span
							class="text-1xl md:text-2xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>Maze Bank</span
						>
						<br />
						<span class="text-1xl md:text-1xl text-right text-grey-dark"
							>Cabang East Los Santos</span
						>
					</div>
				</div>

				<div class="w-full md:w-1/2 flex items-center justify-end">
					<div class="item-body my-auto text-right">
						<span
							class="text-1xl md:text-2xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>{$time}</span
						>
						<br />
						<span class="text-1xl md:text-1xl text-grey-dark">{$date}</span>
					</div>
				</div>
			</div>
		</header>

		<!-- Side Content -->
		<!-- Running Text -->
		<div class="bg-mainColor2 h-25 px-3">
			<div class="py-2 animate-marquee whitespace-nowrap text-mainColor1 font-inter md:font-base">
				<span class="text-1xl mx-2"
					>Sarapan Gratis! Cukup bayar dengan Maze Point. Download Maze Bank App dan upgrade ke Maze
					Prime dapatkan 25 ribu point</span
				>

				<span class="text-1xl mx-2"> - </span>

				<span class="text-1xl mx-2"
					>Belanja apa saja di Mazemart dan dapatkan tambahan diskon 10% setiap hari menggunakan
					jenis kartu kredit Maze Bank. Garansi Termurah!</span
				>

				<span class="text-1xl mx-2"> - </span>

				<span class="text-1xl mx-2"
					>Santap Nikmat Tetap Hemat Bikin jadi Hidup! Nikmati diskon hingga 50% dengan pembayaran
					menggunakan kartu kredit Maze Bank.</span
				>

				<span class="text-1xl mx-2"> - </span>
			</div>
		</div>

		<!-- Main Content -->
		<div class="bg-mainColor3 h-full flex flex-col p-7">
			<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				<div class="bg-mainColor4 row-span-3 col-span-3 p-4">1</div>
				<div class="bg-green-200 p-4">2</div>
				<div class="bg-yellow-200 p-4">3</div>
				<div class="bg-purple-200 p-4">4</div>
				<div class="bg-red-200 p-4">5</div>
				<div class="bg-indigo-200 p-4">6</div>
				<div class="bg-pink-200 p-4">7</div>
				<div class="bg-orange-200 p-4">8</div>
				<div class="bg-teal-200 p-4">9</div>
                <div class="bg-pink-200 p-4">10</div>
				<div class="bg-orange-200 p-4">11</div>
				<div class="bg-teal-200 p-4">12</div>
                <div class="bg-pink-200 p-4">13</div>
				<div class="bg-orange-200 p-4">14</div>
				<div class="bg-teal-200 p-4">15</div>
			</div>
		</div>

		<!-- Your content goes here -->
		<h1 class="text-4xl font-bold mb-4">bdwalbdluiaw</h1>
		<p class="text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac quam vel ipsum vestibulum
			accumsan. Sed tincidunt elit sed lacinia malesuada.
		</p>
        <p class="text-lg">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac quam vel ipsum vestibulum
			accumsan. Sed tincidunt elit sed lacinia malesuada.
		</p>
	</div>
</div>
