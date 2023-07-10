<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<div class="flex overflow-x-hidden">
	<div class="max-w-full">
		<header class="bg-mainColor4 p-7">
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
		<div class="bg-mainColor3 w-full p-7">
			<div class="w-full h-2/3 mr-7 rounded-lg shadow-right-bottom">
				<!-- Test Gambar -->
				<img
					class="w-full h-full rounded-lg shadow-right-bottom"
					src="/asset/asset_main_content/picture-test-3.png"
					alt=""
				/>

				<!-- Test Video Youtube -->
				<!-- <iframe
					class="w-full h-full rounded-lg shadow-right-bottom"
					src="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1"
					title="YouTube video player"
					frameborder="0"
					allowfullscreen
				/> -->
			</div>
			<div class="h-1/3 my-7">
				<div class="grid grid-rows-2 grid-cols-3 gap-4">
					<!-- Kurs Info -->
					<div
						class="bg-mainColor2 col-span-2 h-full flex rounded-xl shadow-right-bottom px-6 py-4"
					>
						<div class=" w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
							<div class="row-span-2 flex justify-center">
								<img src="/asset/asset_main_content/Flag_USA.svg" alt="Logo" class="w-28" />
							</div>
							<div class="row-span-2 flex justify-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold flex items-center text-mainColor1"
								>
									USD
								</p>
							</div>
							<div class=" flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									JUAL
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									BELI
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									13750
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									13650
								</p>
							</div>
						</div>
					</div>
					<!-- Weather Info -->
					<div
						class="bg-mainColor2 row-span-2 h-full flex flex-col rounded-xl shadow-right-bottom px-7 py-6"
					>
						<div class="flex justify-center items-center my-2">
							<img src="/asset/asset_weather/weather_bright.svg" class="h-28" alt="" />
						</div>
						<div class="flex justify-center items-center my-2">
							<div
								class="text-3xl md:text-2xl font-poppins font-bold text-mainColor1 uppercase tracking-wide"
							>
								25° Cerah
							</div>
						</div>
						<div class="h-full grid grid-rows-4 grid-cols-1 text-mainColor1 my-4">
							<p class="flex items-center text-2xl md:text-xl">Feels Like 30°</p>
							<p class="flex items-center text-2xl md:text-xl">Humidity 81%</p>
							<p class="flex items-center text-2xl md:text-xl">UV 8 (Strong)</p>
							<p class="flex items-center text-2xl md:text-xl">Air Quality 50 (Good)</p>
						</div>
					</div>
					<!-- Kurs Info -->
					<div
						class="bg-mainColor2 col-span-2 h-full flex rounded-xl shadow-right-bottom px-6 py-4"
					>
						<div class=" w-full h-full grid grid-cols-4 grid-rows-2 gap-4">
							<div class="row-span-2 flex justify-center">
								<img src="/asset/asset_main_content/Flag_USA.svg" alt="Logo" class="w-28" />
							</div>
							<div class="row-span-2 flex justify-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold flex items-center text-mainColor1"
								>
									USD
								</p>
							</div>
							<div class=" flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									JUAL
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									BELI
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									13750
								</p>
							</div>
							<div class="flex justify-center items-center">
								<p
									class="text-3xl md:text-2xl no-underline font-poppins md:font-semibold text-mainColor1"
								>
									13650
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
