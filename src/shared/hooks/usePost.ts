import { useQuery } from 'react-query';

import fetchPost, { SinglePostParams } from '@shared/api/fetchPost';

const usePost = ({ id }: SinglePostParams) => {
    return useQuery(['posts', { id }], fetchPost);
};

export default usePost;
