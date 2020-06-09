type RenderedContent = {
    rendered: string;
};

export interface Post {
    id: number;
    date: string;
    slug: string;
    status: string;
    title: RenderedContent;
    content: RenderedContent;
    excerpt: RenderedContent;
}
