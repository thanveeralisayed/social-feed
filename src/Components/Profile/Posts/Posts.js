import React from 'react';
import Post from '../../Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { setLike } from '../../../actions';
import { useState, useEffect } from 'react';



const Posts = () => {
    const [posts, setPosts] = useState([]);
    let { uid } = useParams();
    const postsArray = useSelector(state => state.posts);
    const dispatch = useDispatch();

    const likeButtonHandler = (pid, uid) => {
        dispatch(setLike(pid, uid));
        setPosts([...userposts]);
    }



    const userposts = [];

    const pageUpdate = () => {
        console.log('useffect in posts ran');
        postsArray.map(post => {
            if (post.uid === parseInt(uid)) {
                userposts.push(post)
            }
        })
        setPosts([...userposts]);
    }

    

    useEffect(() => {
        pageUpdate();
    }, [])


    console.log(userposts);

    return (
        <div className="container">
            {posts.length > 0 ?
                posts.map((post, i) => <Post pageUpdate={pageUpdate} key={i} likeButtonHandler={likeButtonHandler}
                    post={post} />) : 'you have not post anything yet'}
        </div>
    )
}

export default Posts
