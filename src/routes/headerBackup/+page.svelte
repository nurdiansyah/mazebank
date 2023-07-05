<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<div class="flex flex-col h-screen">
	<header class="bg-mainColor1 mx-11 py-7">
		<div class="flex flex-col items-center md:flex-row">
			<div class="w-full md:w-1/2 flex items-center justify-start">
				<img src="Logo_Maze-Bank.png" alt="Logo" class="h-28" />
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

	<div class="bg-mainColor2 h-25">
		<!-- Konten Baris Kedua -->
		<p>Baris Konten Kedua</p>
	</div>

	<div class="bg-mainColor3 h-50">
		<!-- Konten Baris Ketiga -->
		<p>Baris Konten Ketiga</p>
	</div>
</div>
