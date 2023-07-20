<script>
	export let nomorLoket, tipeLoket, nomorAntrian;
</script>

<!-- Loket Tipe 3 -->
<div
	class="bg-mainColor2 col-span-2 h-full flex items-center rounded-xl shadow-right-bottom px-6 py-4"
>
	<div class="w-1/2">
		<p
			class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor1 drop-shadow-md uppercase tracking-wide"
		>
			Loket {nomorLoket}
		</p>
		<p
			class="text-xs sm:text-sm md:text-lg lg:text-xl xl:text-3xl font-poppins font-regular text-mainColor1 drop-shadow-md uppercase tracking-wide"
		>
			{tipeLoket}
		</p>
	</div>
	<div class="w-1/2 text-right">
		<div
			class=" text-xs sm:text-sm md:text-lg lg:text-xl xl:text-4xl font-poppins font-bold text-mainColor4 drop-shadow-md uppercase tracking-wide"
		>
			{nomorAntrian}
		</div>
	</div>
</div>
