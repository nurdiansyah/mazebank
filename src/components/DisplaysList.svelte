<script>
	export let idDisplays, namaDisplays, linkDisplays, createAtDisplays, statusDisplays;
</script>

<tr class="bg-white border-b">
	<td class="px-6 py-4"> { idDisplays } </td>
	<td class="px-6 py-4"> { namaDisplays } </td>
	<td class="px-6 py-4"> { linkDisplays } </td>
	<td class="px-6 py-4"> { createAtDisplays } </td>
	<td class="px-6 py-4"> { statusDisplays } </td>
	<td class="px-6 py-4">
		<a href="/account/displays/customizeDisplays" class="font-medium text-blue-600hover:underline">Edit</a>
	</td>
</tr>
