<script context="module">
	import { readable } from 'svelte/store';

	function getCurrentDate() {
		const date = new Date();
		const day = date.getDate().toString().padStart(2, '0');
		const monthIndex = date.getMonth();
		const year = date.getFullYear();
		const months = [
			'Januari',
			'Februari',
			'Maret',
			'April',
			'Mei',
			'Juni',
			'Juli',
			'Agustus',
			'September',
			'Oktober',
			'November',
			'Desember'
		];
		const month = months[monthIndex];
		return `${day} ${month} ${year}`;
	}

	export const date = readable(getCurrentDate(), function start(set) {
		const interval = setInterval(() => {
			set(getCurrentDate());
		}, 1000 * 60 * 60 * 24);

		return function stop() {
			clearInterval(interval);
		};
	});

	function getCurrentTime() {
		const date = new Date();
		const hours = date.getHours().toString().padStart(2, '0');
		const minutes = date.getMinutes().toString().padStart(2, '0');
		const seconds = date.getSeconds().toString().padStart(2, '0');
		return `${hours} : ${minutes} : ${seconds}`;
	}

	export const time = readable(getCurrentTime(), function start(set) {
		const interval = setInterval(() => {
			set(getCurrentTime());
		}, 1000);

		return function stop() {
			clearInterval(interval);
		};
	});
</script>
