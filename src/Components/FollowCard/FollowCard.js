import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../UserContext';
import { Link } from 'react-router-dom';

const FollowCard = ({ person }) => {

    const { users } = useContext(UserContext);
    const user = users.find(user => user.uid === parseInt(person));


    return (
        <div>
            <li className="list-group-item">
                <div className="media">
                    <div className="media-left">
                        <a className="avatar avatar-online" href="javascript:void(0)">
                            <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="" />
                            <i />
                        </a>
                    </div>
                    <div className="media-body">
                        <div className="pull-right">
                            <button type="button" className="btn btn-info btn-sm waves-effect waves-light">Follow</button>
                        </div>

                        <Link to={`/profile/${user.uid}`}>
                            <div><a className="name" href="javascript:void(0)">{user.name}</a></div>
                        </Link>


                    </div>
                </div>
            </li>
        </div>
    )
}

export default FollowCard
