import React from 'react';
import './Profile.css';
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import Posts from './Posts/Posts';
import { UserContext } from '../../UserContext';
import { useContext } from 'react';
import Follow from '../Follow/Follow';
import { useSelector } from 'react-redux';


const Profile = () => {
    const posts = useSelector(state=>state.posts);
    let { path, url } = useRouteMatch();
    const { uid } = useParams();
    const { users } = useContext(UserContext);
    const user = users.find(user => user.uid === parseInt(uid));

    const userposts = [];
    posts.map(post => {
        if (post.uid === parseInt(uid)) {
          userposts.push(post);
        }
    })

   

    return (
        <div className="container">
            <div className="row">
                <div className="container d-flex justify-content-center">
                    <div className="card mt-5 px-4 pt-5 pb-4">
                        <div className="name">
                            <h4>{user.name}</h4>
                            <div className="d-flex flex-row"> <small className="text-muted">Popular Artist</small> <i className="fas fa-check ml-2" /> </div>
                            <div className="d-flex flex-row justify-content-between mt-4 pr-4">

                                <Link to={`${url}`}>
                                    <div className="d-flex flex-column align-items-center"><small className="text-muted">Posts</small>
                                        <h6>{userposts.length}</h6>
                                    </div>
                                </Link>

                                <Link to={`${url}/followers`}>
                                    <div className="d-flex flex-column align-items-center"><small className="text-muted">Followers</small>
                                        <h6>{user.followers.length}</h6>
                                    </div>
                                </Link>

                                <Link to={`${url}/following`}>
                                    <div className="d-flex flex-column align-items-center"><small className="text-muted">Following</small>
                                        <h6>{user.following.length}</h6>
                                    </div>
                                </Link>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <Switch>
                <div className="row">
                    <Route exact path={`${path}`}>
                        <Posts/>
                    </Route>

                    <Route path={`${path}/followers`}>
                        <Follow followers={user.followers} />
                    </Route>

                    <Route path={`${path}/following`}>
                        <Follow following={user.following} />
                    </Route>
                </div>
            </Switch>

        </div>
    )
}

export default Profile
