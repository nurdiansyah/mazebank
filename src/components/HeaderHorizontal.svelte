<script>
	import { time, date } from '../functions/DateAndTime.svelte';
</script>

<header class="bg-mainColor1 mx-11 py-7">
	<div class="flex flex-col items-center md:flex-row">
		<div class="w-full md:w-1/2 flex items-center justify-start">
			<img src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" class="h-28" />
			<div class="item-body px-4 my-auto">
				<span class="text-3xl md:text-5xl no-underline font-poppins md:font-semibold"
					>Maze Bank</span
				>
				<br />
				<span class="text-2xl md:text-2xl text-right">Cabang East Los Santos</span>
			</div>
		</div>

		<div class="w-full md:w-1/2 flex items-center justify-end">
			<div class="item-body px-4 my-auto text-right">
				<span class="text-3xl md:text-5xl no-underline font-poppins md:font-semibold">{$time}</span>
				<br />
				<span class="text-2xl md:text-2xl">{$date}</span>
			</div>
		</div>
	</div>
</header>
