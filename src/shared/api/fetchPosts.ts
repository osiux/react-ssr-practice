import 'isomorphic-fetch';
import 'es6-promise/auto';

import { Post } from '@shared/types/api';
import { POSTS_ENDPOINT, DEFAULT_PER_PAGE } from './constants';

export type PostsParams = {
    page?: number;
    perPage?: number;
    categoryId?: number | null;
};

export interface FetchPostsResponse {
    posts: Post[];
    totalPosts: number | null;
    totalPages: number | null;
}

const fetchPosts = async (
    _: string,
    params?: PostsParams
): Promise<FetchPostsResponse> => {
    const filters = {
        page: params?.page ?? 1,
        per_page: params?.perPage ?? DEFAULT_PER_PAGE, // eslint-disable-line @typescript-eslint/camelcase
        categories: [params?.categoryId] ?? null,
    };

    const query = new URLSearchParams(filters as {});
    const endpoint = `${POSTS_ENDPOINT}?${query.toString()}`;
    const response = await fetch(endpoint);

    if (!response.ok) throw new Error('Error fetching posts.');

    const jsonResponse = await response.json();

    const totalPosts = response.headers.get('x-wp-total');
    const totalPages = response.headers.get('x-wp-totalpages');

    return {
        posts: jsonResponse,
        totalPosts: (totalPosts as unknown) as number,
        totalPages: (totalPages as unknown) as number,
    };
};

export default fetchPosts;
