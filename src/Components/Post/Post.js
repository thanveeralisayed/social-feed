import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { UserContext } from '../../UserContext';
import Comment from '../Comment/Comment';
import { setComment } from '../../actions';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import './Post.css';



const Post = ({ post, likeButtonHandler }) => {
    const { users, setUsers, cuser } = useContext(UserContext);
    const [postObject, setPostObject] = useState({});
    let {uid} = useParams();
    if (!uid) {
        uid = post.uid;
    }
    const cuid = cuser.uid;
    const pid = post.pid;
    const user = users.find(user => user.uid === parseInt(uid));
    const [commentc, setCommentc] = useState('');

    const dispatch = useDispatch();
   

    useEffect(() => {
        setPostObject(post)
    }, [])

   
    
   
    console.log(postObject);
   

    const commentBtnHandler = (e) => {
        e.preventDefault();
        dispatch(setComment(pid, cuid, commentc));
        setCommentc('');
        setPostObject(post);
        console.log(commentc);
    }


    return (
        <div className="row">
            <div className="page-content page-container" id="page-content">
                <div className="padding">
                    <div className="row container d-flex justify-content-center">
                        <div className="col-md-6">
                            <div className="box box-widget">
                                <div className="box-header with-border">
                                    <Link to={`/profile/${uid}`}>
                                        <div className="user-block"> <img className="img-circle" src="https://img.icons8.com/color/36/000000/guest-male.png" alt="User Image" /> <span className="username"><a href="#" data-abc="true">{user.name}</a></span> <span className="description">Public - 7:30 PM Today</span> </div>
                                    </Link>
                                    <div className="box-tools"> <button type="button" className="btn btn-box-tool" data-toggle="tooltip" title data-original-title="Mark as read"> <i className="fa fa-circle-o" /></button> <button type="button" className="btn btn-box-tool" data-widget="collapse"><i className="fa fa-minus" /> </button> <button type="button" className="btn btn-box-tool" data-widget="remove"><i className="fa fa-times" /></button> </div>
                                </div>
                                <div className="box-body"> <img className="img-responsive pad" src="https://i.imgur.com/EAQkLS1.jpg" alt="Photo" />
                                    <p>{postObject.content}</p> <button type="button" className="btn btn-default btn-xs"><i className="fa fa-share" /> Share</button> <button onClick={() => likeButtonHandler(post.pid, cuid)} type="button" className="btn btn-default btn-xs">
                                        <i className="fa fa-thumbs-o-up" /> {post.lusers.includes(cuid) ? 'Unlike' : 'Like'}</button> <span className="pull-right text-muted">{post.likes} likes - {postObject.comments ? postObject.comments.length : ''}  {postObject.comments && postObject.comments.length > 1 ? 'comments' : 'comment'}</span>
                                </div>
                                <div className="box-footer box-comments">

                                    {postObject.comments ? postObject.comments.map((comment,i) =>
                                        <Comment  key={`${i}cm`} comment={comment} />
                                    ) : ''}

                                </div>
                                <div className="box-footer">
                                    <form action="#" method="post"> <img className="img-responsive img-circle img-sm" src="https://img.icons8.com/color/36/000000/administrator-male.png" alt="Alt Text" />
                                        <div className="img-push"> <input value={commentc} onChange={(e) => setCommentc(e.target.value)} type="text" className="form-control input-sm" placeholder="Press enter to post comment" /> </div>
                                        <button onClick={(e) => commentBtnHandler(e)} className="mt-2 img-responsive btn-sm btn btn-success">Comment</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Post
