export interface Attachment {
    service: string;
    thumbnail?: AttachmentURL;
    small?: AttachmentURL;
    medium?: AttachmentURL;
    large?: AttachmentURL;
    metadata?: AttachmentURL;
    original: AttachmentURL;
}
export interface AttachmentURL {
    service: string;
    width?: number;
    height?: number;
    duration?: number;
    filename?: string;
    content_type?: string;
    url: string;
    routed_url?: string;
    alt_url?: string;
}
export interface Connection {
    service?: string;
    url: string;
    id?: string;
    author_id?: string;
}
export interface Mention {
    url: string;
}
export interface Page<T> {
    items?: T[];
    total?: number;
    next?: Map<string, string | number>;
}
export interface Post {
    service: string;
    created_at: string;
    id: string;
    url: string;
    alt_url?: string;
    title?: string;
    description?: string;
    views?: number;
    likes?: number;
    comments?: number;
    attachments?: Attachment[];
    tags?: Tag[];
    author?: User;
    connections?: Connection[];
    mentions?: Mention[];
    nsfw?: boolean;
    language?: string;
    liked?: boolean;
}
export interface Tag {
    service: string;
    id?: string;
    name: string;
    localized_name?: string;
    description?: string;
    localized_description?: string;
    post_count?: number;
}
export interface User {
    service: string;
    created_at?: string;
    id: string;
    name: string;
    unique_name?: string;
    bio?: string;
    url: string;
    alt_url?: string;
    avatar?: Attachment;
    banner?: Attachment;
    followers?: number;
    connections?: Connection[];
    mentions?: Mention[];
    tags?: Tag[];
    language?: string;
    following?: boolean;
}

const api_origin = import.meta.env.DEV ? "http://localhost:8000" : window.location.origin;

async function request(path: string, service: string, token?: string, extras?: Record<string, string>) {
    console.log(import.meta.env.DEV, api_origin);
    const url = `${api_origin}/api/${path}?` + new URLSearchParams({"service": service, ...extras});
    const response = await fetch(url, {
        headers: token ? { Authorization: token } : undefined,
    });

    if (!response.headers.get("Content-Type")?.startsWith("application/json")) {
        throw new Error(`Invalid content type: ${response.headers.get("Content-Type")}`);
    }

    const data = await response.json();

    if ( data.error ) {
        // TODO: Custom errors
        throw new Error(await response.text());
    }

    return data;
}


export async function get_user(user: string, service: string, token?: string, extras?: Record<string, string>) {
    const data = await request(`users/${user}`, service, token, extras);
    return data as User;
}

export async function get_user_posts(user: string, service: string, token?: string, extras?: Record<string, string>) {
    const data = await request(`users/${user}/posts`, service, token, extras);
    return data as Page<Post>;
}

export async function get_post(user: string | undefined, post: string, service: string, token?: string, extras?: Record<string, string>) {
    const path = user ? `users/${user}/posts/${post}` : `posts/${post}`;
    const data = await request(path, service, token, extras);
    return data as Post;
}