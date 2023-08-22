<nav class="relative shadow-lg">
	<div class="max-w-7xl mx-auto px-4">
		<div class="flex justify-between h-16">
			<!-- Left side (Logo and Name) -->
			<div class="flex items-center">
				<img class="h-8 w-auto mr-2" src="/asset/asset_header/Logo_Maze-Bank.png" alt="Logo" />
				<span class="text-lg font-semibold">DIGISIN</span>
			</div>

			<!-- Center (Button Navigation) - Disabled on Mobile -->
			<div class="hidden md:flex justify-center flex-1 space-x-6">
				<!-- Add space-x-2 class here -->
				<button class="btn"><a href="/account/home">Home</a></button>
				<button class="btn"><a href="/account/displays">Displays</a></button>
				<button class="btn"><a href="/account/storage">Storage</a></button>
				<button class="btn"><a href="/account/contacts">Contacts</a></button>
			</div>

			<!-- Right side (Avatar and Dropdown) -->
			<div class="flex items-center">
				<img
					class="h-8 w-8 rounded-full"
					src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrLTlUcBwGKf95uEaZe8LFW-MscYZdCx6uGQ&usqp=CAU"
					alt="Avatar"
				/>
				<!-- Dropdown List -->
				<button
					id="dropdownInformationButton"
					data-dropdown-toggle="dropdownInformation"
					class="rounded-lg text-sm px-5 nline-flex items-center"
					type="button"
					><svg
						class="w-2.5 h-2.5"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 10 6"
					>
						<path
							stroke="currentColor"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="m1 1 4 4 4-4"
						/>
					</svg></button
				>

				<!-- Dropdown menu -->
				<div
					id="dropdownInformation"
					class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
				>
					<div class="px-4 py-3 text-sm text-gray-900">
						<div>Digisin</div>
						<div class="font-medium truncate">digisin@gmail.com</div>
					</div>
					<ul class="py-2 text-sm text-gray-700" aria-labelledby="dropdownInformationButton">
						<li>
							<a href="/account/home" class="block px-4 py-2 hover:bg-gray-100">Home</a>
						</li>
						<li>
							<a href="/account/displays" class="block px-4 py-2 hover:bg-gray-100">Displays</a>
						</li>
						<li>
							<a href="/account/storage" class="block px-4 py-2 hover:bg-gray-100">Storage</a>
						</li>
						<li>
							<a href="/account/contacts" class="block px-4 py-2 hover:bg-gray-100">Contacts</a>
						</li>
					</ul>
					<div class="py-2">
						<a
							href="/account/logout"
							class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Log Out</a
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</nav>
