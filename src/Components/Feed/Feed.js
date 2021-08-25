import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Post from '../Post/Post'

const Feed = () => {

    const postsArray = useSelector(state => state.posts);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts([...postsArray]);
    }, [])

    return (
        <div className="container">
            {posts.map((post)=>
                <Post post={post} />
            )}
        </div>
    )
}

export default Feed
