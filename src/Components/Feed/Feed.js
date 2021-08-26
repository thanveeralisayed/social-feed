import React, { useState, useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { setLike,setComment } from '../../actions';
import Post from '../Post/Post';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';

const Feed = () => {

    const postsArray = useSelector(state => state.posts);
    const [posts, setPosts] = useState([]);
    const dispatch = useDispatch();
    const {cuser} = useContext(UserContext);
    console.log(cuser);

    useEffect(() => {
        setPosts([...postsArray]);
    }, [postsArray])


    

    const likeButtonHandler = (pid,uid) => {
        dispatch(setLike(pid,uid));
        setPosts([...postsArray]);
    }

   

    return (
        <div className="container">
            {posts.map((post,i)=>
                <Post key={i} likeButtonHandler={likeButtonHandler} post={post} />
            )}
        </div>
    )
}

export default Feed
