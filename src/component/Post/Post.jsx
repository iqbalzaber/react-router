import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Posts from '../Posts/Posts';

const Post = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>All posts are here{posts.length}</h2>
            <div>
                {
                    posts.map(posts =><Posts
                    key={posts.id}
                    posts={posts}
                    ></Posts>)
                }
            </div>
        </div>
    );
};

export default Post;