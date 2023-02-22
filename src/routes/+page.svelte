<script lang="ts">
	import Board from '../lib/board/Board.svelte';
	import type { Page, Post } from '../lib/types/atuyka';

	// I have no idea how to import typed JSON files
	import * as raw_data from './test_data.json';
	let typed_data: Page<Post> = raw_data;
	$: data = typed_data;
</script>

<h1>Popular posts</h1>
<p>Current popular posts on SOURCE.</p>
<Board {data} />
