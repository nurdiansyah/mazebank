<script>
	import { time, date } from '../../functions/DateAndTime.svelte';
</script>

<div class="flex flex-col h-screen overflow-x-hidden">
	<!-- Header Content -->
	<!-- Informasi Lembaga -->
	<header class="bg-mainColor1 mx-11 py-7">
		<div class="flex flex-col items-center md:flex-row">
			<div class="w-full md:w-1/2 flex items-center justify-start">
				<img src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" class="h-28" />
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
	<div
		class="bg-mainColor3 h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-mainColor1 p-2"
	>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 1
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						ASSISTANT
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						A101
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 2
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						ASSISTANT
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						A102
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 3
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						ASSISTANT
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						A103
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 4
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B101
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 5
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B102
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 6
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B103
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 7
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B104
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 8
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B105
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div
				class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
			>
				<div class="w-1/2">
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						Loket 9
					</p>
					<p
						class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
					>
						TELLER
					</p>
				</div>
				<div class="w-1/2 text-right">
					<div
						class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
					>
						B106
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
