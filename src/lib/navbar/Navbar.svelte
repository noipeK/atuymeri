<script>
	import NavbarLink from './NavbarLink.svelte';
</script>

<nav>
	<div>
		<NavbarLink href="/feed/recommended" title="My Feed" />
		<NavbarLink href="/feed/following" title="New posts" />
		<NavbarLink href="/users/me/likes" title="Favorites" />
		<NavbarLink href="/users/me" title="My Account" />
	</div>
</nav>
