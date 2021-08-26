import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { UserContext } from '../../UserContext';


const Comment = ({ comment }) => {
    const { users } = useContext(UserContext);
    const uid = comment.uid;
    const user = users.find(user => user.uid === uid);




    return (
        <div className="box-comment"> <img className="img-circle img-sm" src="https://img.icons8.com/office/36/000000/person-female.png" alt="User Image" />
            <div className="comment-text">
                
                    <span className="username"> {user ? user.name : ''} <span className="text-muted pull-right">8:03 PM Today</span>
                    </span>{comment.content} </div>
        </div>
    )
}

export default Comment
