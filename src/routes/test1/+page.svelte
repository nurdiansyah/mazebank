<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<!-- Header Content -->
<!-- Informasi Bank -->
<header class="bg-mainColor1 py-5 ps-8 pe-8">
	<div class="flex flex-col items-center md:flex-row">
		<div class="w-full md:w-1/2 flex items-center justify-start">
			<img class="w-full md:w-auto max-w-[8rem]" src="/asset/asset_header/Logo_Maze-Bank.png" alt="" />
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
<!-- <div class="bg-mainColor3 w-full flex h-screen overflow-hidden"> -->
<div class="bg-mainColor3 w-full h-auto">
	<div class="flex">
		<div class="w-4/6 h-screen p-8">
			<iframe
				class="w-full h-full rounded-lg shadow-right-bottom"
				src="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1"
				title="YouTube video player"
				frameborder="0"
				allowfullscreen
			/>
		</div>

		<div class="w-2/6 p-8 ml-2">
			<div
				class="bg-mainColor2 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl shadow-right-bottom my-6"
			>
				<div class="float-left content flex p-8">
					<div class="table w-full">
						<p class="uppercase tracking-wide text-5xl text-mainColor1 font-poppins font-bold">
							Loket 1
						</p>
						<p class="uppercase tracking-wide text-3xl text-mainColor1 font-poppins font-regular">
							Pasien BPJS
						</p>
					</div>
				</div>

				<div class="float-right content flex p-8">
					<div class="uppercase tracking-wide text-5xl text-mainColor4 font-poppins font-bold">
						B101
					</div>
				</div>
			</div>

			<div
				class="bg-mainColor2 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl shadow-right-bottom my-6"
			>
				<div class="float-left content flex p-8">
					<div class="table w-full">
						<p class="uppercase tracking-wide text-5xl text-mainColor1 font-poppins font-bold">
							Loket 2
						</p>
						<p class="uppercase tracking-wide text-3xl text-mainColor1 font-poppins font-regular">
							Pasien BPJS
						</p>
					</div>
				</div>

				<div class="float-right content flex p-8">
					<div class="uppercase tracking-wide text-5xl text-mainColor4 font-poppins font-bold">
						B102
					</div>
				</div>
			</div>

			<div
				class="bg-mainColor2 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl shadow-right-bottom my-6"
			>
				<div class="float-left content flex p-8">
					<div class="table w-full">
						<p class="uppercase tracking-wide text-5xl text-mainColor1 font-poppins font-bold">
							Loket 3
						</p>
						<p class="uppercase tracking-wide text-3xl text-mainColor1 font-poppins font-regular">
							Pasien BPJS
						</p>
					</div>
				</div>

				<div class="float-right content flex p-8">
					<div class="uppercase tracking-wide text-5xl text-mainColor4 font-poppins font-bold">
						B103
					</div>
				</div>
			</div>

			<div
				class="bg-mainColor2 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl shadow-right-bottom my-6"
			>
				<div class="float-left content flex p-8">
					<div class="table w-full">
						<p class="uppercase tracking-wide text-5xl text-mainColor1 font-poppins font-bold">
							Loket 4
						</p>
						<p class="uppercase tracking-wide text-3xl text-mainColor1 font-poppins font-regular">
							Pasien Umum
						</p>
					</div>
				</div>

				<div class="float-right content flex p-8">
					<div class="uppercase tracking-wide text-5xl text-mainColor4 font-poppins font-bold">
						A101
					</div>
				</div>
			</div>

			<div
				class="bg-mainColor2 max-w-md mx-auto rounded-xl overflow-hidden md:max-w-2xl shadow-right-bottom my-6"
			>
				<div class="float-left content flex p-8">
					<div class="table w-full">
						<p class="uppercase tracking-wide text-5xl text-mainColor1 font-poppins font-bold">
							Loket 5
						</p>
						<p class="uppercase tracking-wide text-3xl text-mainColor1 font-poppins font-regular">
							Pasien Umum
						</p>
					</div>
				</div>

				<div class="float-right content flex p-8">
					<div class="uppercase tracking-wide text-5xl text-mainColor4 font-poppins font-bold">
						A102
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
