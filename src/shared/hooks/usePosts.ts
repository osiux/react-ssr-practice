import { useQuery } from 'react-query';

import fetchPosts, { PostsParams } from '@shared/api/fetchPosts';

const usePosts = (params?: PostsParams) => {
    return useQuery(['posts', params], fetchPosts)
};

export default usePosts;
