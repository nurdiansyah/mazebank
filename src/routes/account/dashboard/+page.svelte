<script>
	import {
		Avatar,
		Chevron,
		Dropdown,
		DropdownItem,
		DropdownHeader,
		DropdownDivider,
		MegaMenu,
		Navbar,
		NavBrand,
		NavLi,
		NavUl,
		NavHamburger
	} from 'flowbite-svelte';
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/account/dashboard">
		<img src="/asset/asset_header/Logo_Maze-Bank.png" class="mr-3 h-6 sm:h-9" alt="Digisin Logo" />
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">DIGISIN</span>
	</NavBrand>
	<div class="flex items-center md:order-2">
		<Avatar>DS</Avatar>
		<NavUl id="avatar-menu" class="cursor-pointer"><Chevron aligned /></NavUl>
	</div>

	<Dropdown placement="bottom" triggeredBy="#avatar-menu">
		<DropdownHeader>
			<span class="block text-sm"> Digital Signage </span>
			<span class="block truncate text-sm font-medium"> digitalSignage@gmail.com </span>
		</DropdownHeader>
        <DropdownItem>Home</DropdownItem>
        <DropdownItem>Player</DropdownItem>
        <DropdownItem>Media</DropdownItem>
        <DropdownItem>Contacts</DropdownItem>
		<DropdownItem>Settings</DropdownItem>
		<DropdownDivider />
		<DropdownItem>Logout</DropdownItem>
	</Dropdown>

	<NavUl {hidden}>
		<NavLi href="/account/dashboard" active={true}>Home</NavLi>
		<NavLi href="/account/player" active={false}>Player</NavLi>
		<NavLi href="/account/media" active={false}>Media</NavLi>
		<NavLi href="/account/contact" active={false}>Contact</NavLi>
	</NavUl>
</Navbar>
