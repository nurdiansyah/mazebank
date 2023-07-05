<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<!-- Header Content -->
<!-- Informasi Bank -->
<header class="bg-mainColor1 py-5 ps-8 pe-8">
	<div class="flex flex-col items-center md:flex-row">
		<div class="w-full md:w-1/2 flex items-center justify-start">
			<img class="w-full md:w-auto max-w-[8rem]" src="Logo_Maze-Bank.png" alt="" />
			<div class="item-body px-4 my-auto">
				<span
					class="text-3xl md:text-5xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
					>Maze Bank</span
				>
				<br />
				<span class="text-2xl md:text-2xl text-right text-grey-dark">Cabang East Los Santos</span>
			</div>
		</div>

		<div class="w-full md:w-1/2 flex items-center justify-end">
			<div class="item-body px-4 my-auto text-right">
				<span
					class="text-3xl md:text-5xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
					>{$time}</span
				>
				<br />
				<span class="text-2xl md:text-2xl text-grey-dark">{$date}</span>
			</div>
		</div>
	</div>
</header>

<!-- Side Content -->
<!-- Running Text Berita -->
<div
	class="bg-mainColor2 w-full flex flex-col space-y-4 md:flex-row md:space-x-4 md:space-y-0 relative overflow-x-hidden"
>
	<div class="py-2 animate-marquee whitespace-nowrap text-mainColor1 font-inter md:font-base">
		<span class="text-2xl mx-2"
			>Sarapan Gratis! Cukup bayar dengan Maze Point. Download Maze Bank App dan upgrade ke Maze
			Prime dapatkan 25 ribu point</span
		>

		<span class="text-2xl mx-2"> - </span>

		<span class="text-2xl mx-2"
			>Belanja apa saja di Mazemart dan dapatkan tambahan diskon 10% setiap hari menggunakan jenis
			kartu kredit Maze Bank. Garansi Termurah!</span
		>

		<span class="text-2xl mx-2"> - </span>

		<span class="text-2xl mx-2"
			>Santap Nikmat Tetap Hemat Bikin jadi Hidup! Nikmati diskon hingga 50% dengan pembayaran
			menggunakan kartu kredit Maze Bank.</span
		>

		<span class="text-2xl mx-2"> - </span>
	</div>
</div>

<!-- Body Content -->

