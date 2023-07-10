<script>
	import { time, date } from '../../addons/DateAndTime.svelte';
</script>

<div class="bg-mainColor1 h-screen flex flex-col justify-start items-center">
	<header class="bg-mainColor2 mx- py-7">
		<div class="flex flex-col items-center md:flex-row">
			<div class="w-full md:w-1/2 flex items-center justify-start">
				<img src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" class="h-12" />
				<div class="item-body px-4 my-auto">
					<span
						class="text-1xl md:text-2xl no-underline text-grey-darkest hover:text-blue-dark font-poppins md:font-semibold"
						>Maze Bank</span
					>
					<br />
					<span class="text-1xl md:text-1xl text-right text-grey-dark">Cabang East Los Santos</span>
				</div>
			</div>

			<div class="w-full md:w-1/2 flex items-center justify-end">
				<div class="item-body px-4 my-auto text-right">
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

	<h1 class="text-4xl font-bold">Tampilan Tegak</h1>
	<p class="text-lg">Ini adalah contoh tampilan tegak menggunakan Tailwind CSS.</p>
</div>
