<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
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
		class="bg-mainColor3 h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-mainColor1"
	>
		<div class="row-span-2 col-span-2 p-4">
			<div class="w-full h-full rounded-lg shadow-right-bottom">
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
		<div class="p-4">
			<!-- Loket -->
			<div class="card">
				<div class="card-body bg-mainColor2 flex rounded-xl shadow-right-bottom px-10 py-9">
					<div class="w-1/2">
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 uppercase tracking-wide"
						>
							Loket 1
						</p>
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 uppercase tracking-wide"
						>
							Pasien BPJS
						</p>
					</div>
					<div class="w-1/2 text-right">
						<div
							class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 uppercase tracking-wide"
						>
							B101
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div class="card">
				<div class="card-body bg-mainColor2 flex rounded-xl shadow-right-bottom px-10 py-9">
					<div class="w-1/2">
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 uppercase tracking-wide"
						>
							Loket 2
						</p>
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 uppercase tracking-wide"
						>
							Pasien BPJS
						</p>
					</div>
					<div class="w-1/2 text-right">
						<div
							class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 uppercase tracking-wide"
						>
							B101
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="col-span-2 p-4">
			<!-- Kurs -->
			<div class="card">
				<div class="card-body bg-mainColor2 flex rounded-xl shadow-right-bottom px-10 py-9">
					<div class="bg-mainColor2 w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
						<div class="row-span-2 flex justify-center p-4">
							<img src="/asset/asset_main_content/Flag_USA.svg" alt="Logo" class="h-28" />
						</div>
						<div class="row-span-2 flex justify-center p-4">
							<p
								class="text-3xl md:text-3xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold align-middle"
							>
								USD
							</p>
						</div>
						<div class=" flex justify-center p-4">
							<p
								class="text-3xl md:text-3xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>
								JUAL
							</p>
						</div>
						<div class="flex justify-center p-4">
							<p
								class="text-3xl md:text-3xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>
								BELI
							</p>
						</div>
						<div class="flex justify-center p-4">
							<p
								class="text-3xl md:text-3xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>
                            13750
							</p>
						</div>
						<div class="flex justify-center p-4">
							<p
								class="text-3xl md:text-3xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
							>
								13650
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="p-4">
			<!-- Loket -->
			<div class="card">
				<div class="card-body bg-mainColor2 flex rounded-xl shadow-right-bottom px-10 py-9">
					<div class="w-1/2">
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 uppercase tracking-wide"
						>
							Loket 3
						</p>
						<p
							class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 uppercase tracking-wide"
						>
							Pasien BPJS
						</p>
					</div>
					<div class="w-1/2 text-right">
						<div
							class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 uppercase tracking-wide"
						>
							B101
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
