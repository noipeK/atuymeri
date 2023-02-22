// atuyka openapi models
// (I should probably use a generator for this)

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
