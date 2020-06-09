import { useQuery } from 'react-query';

const useCategory = (categorySlug: string) => {
    const { data, status } = useQuery(
        ['posts', 'category', categorySlug],
        () => {
            return Promise.resolve({});
        }
    );

    return [data, status];
};

export default useCategory;
