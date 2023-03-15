<script lang="ts">
    import { get_user_posts } from "@/lib/api.js";
    import Navbar from "@/lib/navbar/Navbar.svelte";
    import Board from "@/lib/board/Board.svelte";

    let promise = get_user_posts("rikrankin", "twitter");
</script>

<Navbar />
<body>
    <h1>Popular posts</h1>
    <p>Current popular posts on SOURCE.</p>
    {#await promise}
        <p>Loading...</p>
    {:then data}
        <Board {data} />
    {:catch error}
        <p>{error.message}</p>
    {/await}
</body>


<style>

</style>