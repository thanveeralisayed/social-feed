import { LIKE } from '../actions/';
import posts from '../jsonStore/posts.json';

const likeReducer = (state = posts, action) => {

    if (action.type === LIKE) {
        state.map((post) => {
            if (post.pid === action.payload.pid) {
                if (post.lusers.includes(action.payload.uid)) {
                    const index = post.lusers.indexOf(action.payload.uid);
                    post.lusers.splice(index,1);
                }
                else{
                    post.lusers.push(action.payload.uid)
                }
                    return state;
            }
            post.likes = post.lusers.length;
            return state;
        })
        return state;
    }
    return state;
}

export default likeReducer;

