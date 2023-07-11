<script>
	import KursMataUangTipe1 from '../KursMataUang/KursMataUangTipe1.svelte';
	import Loket from '../Loket/LoketTipe3.svelte';
	import MediaPlayer from '../MediaPlayer.svelte';
</script>

<div
	class="bg-mainColor3 h-screen grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-mainColor1 p-2"
>
	<div class="row-span-2 col-span-2 p-4">
		<MediaPlayer sourceVideo="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1" />
	</div>
	<div class="p-4">
		<Loket nomorLoket="1" tipeLoket="ASSISTANT" nomorAntrian="A101" />
	</div>
	<div class="p-4">
		<Loket nomorLoket="2" tipeLoket="TELLER" nomorAntrian="B101" />
	</div>
	<div class="col-span-2 p-4">
		<KursMataUangTipe1 />
	</div>
	<div class="p-4">
		<Loket nomorLoket="3" tipeLoket="TELLER" nomorAntrian="B102" />
	</div>
</div>
