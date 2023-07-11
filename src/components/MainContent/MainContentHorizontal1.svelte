<script>
	import Loket from '../Loket/LoketTipe1.svelte';
	import MediaPlayer from '../MediaPlayer.svelte';
</script>

<div class="bg-mainColor3 h-50 p-7">
	<div class="flex">
		<div class="w-2/3 mr-7 rounded-lg shadow-right-bottom">
			<MediaPlayer sourceVideo="https://www.youtube.com/embed/KMPnVroI2vE?autoplay=0&loop=1" />
		</div>
		<div class="w-1/3 container flex items-center">
			<div class="row w-full">
				<div class="col-12">
					<Loket nomorLoket="1" tipeLoket="ASSISTANT" nomorAntrian="A101" />
					<Loket nomorLoket="2" tipeLoket="ASSISTANT" nomorAntrian="A102" />
					<Loket nomorLoket="3" tipeLoket="TELLER" nomorAntrian="B101" />
					<Loket nomorLoket="4" tipeLoket="TELLER" nomorAntrian="B102" />
					<Loket nomorLoket="5" tipeLoket="TELLER" nomorAntrian="B103" />
				</div>
			</div>
		</div>
	</div>
</div>
