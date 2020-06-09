import React from 'react';
import { Link, useLocation } from 'react-router-dom';

import { usePosts } from '@shared/hooks';
import { Post } from '@shared/types/api';
import routes from '@shared/routes';

const Home = () => {
    const location = useLocation();

    const searchParams = new URLSearchParams(location.search);

    const currentPage = searchParams.get('page') ?? 1;

    const { data, status } = usePosts({
        page: currentPage as number,
    });

    return (
        <section>
            {status === 'success' &&
                data &&
                data.posts &&
                data.posts.map((post: Post) => {
                    return (
                        <article key={post.id}>
                            <h1>
                                <Link
                                    to={routes.SINGLE_POST.replace(
                                        ':slug',
                                        `${post.id}-${post.slug}`
                                    )}
                                >
                                    {post.title.rendered}
                                </Link>
                            </h1>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: post.excerpt.rendered,
                                }}
                            />
                        </article>
                    );
                })}
        </section>
    );
};

export default Home;
