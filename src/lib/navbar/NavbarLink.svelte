<script lang="ts">
    export let title: string;
    export let href: string;
</script>

<a {href} class:active={window.location.pathname.includes(href)}>
    {title}
</a>

<style>
    a {
        color: white;
        background-color: transparent;
        outline: 0;
        border: 0;
        padding: 6px;
        font-size: 1em;
        text-decoration: none;
    }
    a.active {
        background-color: rgba(0, 0, 0, 0.24);
    }
    a:hover {
        color: orange;
    }
</style>
