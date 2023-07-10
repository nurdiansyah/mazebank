<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<div class="flex flex-col h-screen max-h-screen overflow-x-hidden">
	<!-- Header Content -->
	<!-- Informasi Lembaga -->
	<header class="bg-mainColor1 mx-11 py-7">
		<div class="flex flex-col items-center md:flex-row">
			<div class="w-full md:w-1/2 flex items-center justify-start">
				<img src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" class="h-28" />
				<div class="item-body px-4 my-auto">
					<span
						class="text-3xl md:text-5xl no-underline font-poppins md:font-semibold"
						>Maze Bank</span
					>
					<br />
					<span class="text-2xl md:text-2xl text-right">Cabang East Los Santos</span>
				</div>
			</div>

			<div class="w-full md:w-1/2 flex items-center justify-end">
				<div class="item-body px-4 my-auto text-right">
					<span
						class="text-3xl md:text-5xl no-underline font-poppins md:font-semibold"
						>{$time}</span
					>
					<br />
					<span class="text-2xl md:text-2xl">{$date}</span>
				</div>
			</div>
		</div>
	</header>

	<!-- Side Content -->
	<!-- Running Text -->
	<div class="bg-mainColor2 h-25 px-3">
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

	<!-- Main Content -->
	<div class="bg-mainColor3 h-full flex flex-col p-7">
		<!-- Test Gambar -->
		<!-- <img class="w-full h-full rounded-lg shadow-right-bottom" src="/asset/asset_main_content/picture-test-3.png" alt="" /> -->

		<!-- Test Video Youtube -->
		<iframe
			class="w-full h-full rounded-lg shadow-right-bottom"
			src="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1"
			title="YouTube video player"
			frameborder="0"
			allowfullscreen
		/>
	</div>
</div>
