<script lang="ts">
	import Post from './Post.svelte';
	import type { Page, Post as PostType } from '../types/atuyka';

	export let data: Page<PostType>;
</script>

{#if data.items == undefined || data.items.length == 0}
	<p>No posts found.</p>
{:else}
	<div class="grid">
		{#each data.items as item}
			<Post data={item} />
		{/each}
	</div>
{/if}

<style>
	.grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
		grid-gap: 0.2rem;
	}
</style>
