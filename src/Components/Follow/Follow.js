import React from 'react';
import FollowCard from '../FollowCard/FollowCard';
import './Follow.css';

const Follow = (props) => {
    let follows;
    props.followers ? follows = props.followers : follows = props.following;
    console.log(follows);

    return (
        <div>
            <div className="container">
                <div className="row bootstrap snippets bootdey">
                    <div className="col-md-8 col-xs-12">
                        <div className="panel" id="followers">
                            <div className="panel-heading">
                                <h3 className="panel-title">
                                    <i className="icon md-check" aria-hidden="true" /> 
                                {props.followers ? 'Followers' : 'Following'}
                                </h3>
                            </div>
                            <div className="panel-body">
                                <ul className="list-group list-group-dividered list-group-full">
                                    {
                                        follows.map((person) => <FollowCard person={person} />)
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Follow
