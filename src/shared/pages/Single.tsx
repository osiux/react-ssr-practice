import React from 'react';
import { useParams } from 'react-router-dom';

import { usePost } from '@shared/hooks';

const Single = () => {
    const { slug } = useParams<{ slug: string }>();

    const [id, ] = slug.split('-');

    const { data: post, status } = usePost({ id: (id as unknown) as number });

    console.log(post);

    return (
        <section>
            {status === 'loading' && <p>Loading...</p>}
            {status === 'success' && post && (
                <article key={post.id}>
                    <h1>{post.title.rendered}</h1>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: post.content.rendered,
                        }}
                    />
                </article>
            )}
        </section>
    );
};

export default Single;
