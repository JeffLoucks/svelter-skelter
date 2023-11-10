<script>

	// Layouts apply styles, components, and logic to all sibling, child and so on pages
	// It's pretty handy to put something like a navigation, a footer, or even just a layout wrapper in here


	//Applying tailwind styles to all routes by using root +layout.svelte import
	import "../app.css";

</script>

	<header>
		<nav class="h-[80px] bg-indigo-600">

		</nav>
	</header>

	<!-- Slots infer that your other pages will be populated here -->
	<slot />
