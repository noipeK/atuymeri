<script lang="ts">
    import type { Post as PostType } from "../types/atuyka";

    export let data: PostType;
</script>

<article class="post-preview" data-id={data.id}>
    <div class="preview-item">
        <a href="/users/{data.author?.id}/posts/{data.id}?service={data.service}" style="text-decoration: none">
            {#if data.attachments && data.attachments.length > 0}
                <picture class="preview-attachment">
                    <img src={data.attachments[0].thumbnail?.alt_url} alt={data.title} />
                    {#if data.attachments.length > 1}
                        <div class="image-overlay image-count">{data.attachments.length}🖼️</div>
                    {/if}
                    <a href={data.url}>
                        <div class="image-overlay image-likes">{data.likes} {data.liked ? "🧡" : "❤"}</div>
                    </a>
                    {#if data.author}
                        <a href="/users/{data.author.id}?service={data.service}">
                            <div class="image-overlay image-author">
                                {#if data.author.avatar}
                                    <img
                                        class="image-author-icon"
                                        src={data.author.avatar.small?.alt_url}
                                        alt={data.author.name}
                                    />
                                {/if}
                                {data.author.name}
                            </div>
                        </a>
                    {/if}
                </picture>
            {:else}
                <div>{data.title}</div>
            {/if}
        </a>
    </div>
</article>

<!-- I seriously need to figure out a way to tightly pack these on any size -->
<style>
    .post-preview {
        display: grid;
        grid-template-columns: 1fr 3fr;
        grid-template-rows: 1fr;
        grid-template-areas: "thumbnail title";
        grid-gap: 1rem;
    }

    .preview-item {
        display: flex;
        align-items: center;
    }

    .preview-attachment {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 11rem;
        overflow: hidden;
        border-radius: 0.2rem;
        position: relative;
        text-align: center;
    }

    .image-overlay {
        background-color: #202020a0;
        position: absolute;
        border-radius: 0.2rem;
    }

    .image-count {
        top: 0;
        right: 0;
    }

    .image-likes {
        bottom: 0;
        right: 0;
    }

    .image-author {
        bottom: 0;
        left: 0;
        display: flex;
        align-items: center;
        padding: 0.2rem;
    }

    .image-author-icon {
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        margin-right: 0.2rem;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    a {
        color: #ffffff;
        text-decoration: none;
    }
</style>
