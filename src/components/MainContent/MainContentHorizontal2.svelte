<script>
	import Loket from '../Loket/LoketTipe2.svelte';
	import MediaPlayer from '../MediaPlayer.svelte';
</script>

<div class="bg-mainColor3 h-full flex flex-col p-7">
	<div class="h-5/6 mb-5">
		<MediaPlayer sourceVideo="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1" />
	</div>
	<div class="h-1/6">
		<div class="grid grid-cols-4 gap-4">
			<Loket nomorLoket="1" tipeLoket="ASSISTANT" nomorAntrian="A101" />
			<Loket nomorLoket="2" tipeLoket="TELLER" nomorAntrian="B101" />
			<Loket nomorLoket="3" tipeLoket="TELLER" nomorAntrian="B102" />
			<Loket nomorLoket="4" tipeLoket="TELLER" nomorAntrian="B103" />
		</div>
	</div>
</div>
