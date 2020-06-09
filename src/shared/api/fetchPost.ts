import 'isomorphic-fetch';
import 'es6-promise/auto';

import { Post } from '@shared/types/api';
import { SINGLE_POST_ENDPOINT } from './constants';

export type SinglePostParams = {
    id: number;
};

const fetchPost = async (
    _: string,
    { id }: SinglePostParams
): Promise<Post> => {
    const endpoint = `${SINGLE_POST_ENDPOINT.replace(
        ':id',
        (id as unknown) as string
    )}`;
    const response = await fetch(endpoint);

    if (!response.ok) throw new Error(`Error fetching post with id: ${id}.`);

    const jsonResponse = await response.json();

    return jsonResponse;
};

export default fetchPost;
