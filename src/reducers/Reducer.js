import { LIKE, COMMENT } from '../actions';
import posts from '../jsonStore/posts.json';

const Reducer = (state = posts, action) => {

    if (action.type === LIKE) {
        state.map((post) => {
            if (post.pid === action.payload.pid) {
                if (post.lusers.includes(action.payload.uid)) {
                    const index = post.lusers.indexOf(action.payload.uid);
                    post.lusers.splice(index, 1);
                    post.likes = post.lusers.length;
                }
                else {
                    post.lusers.push(action.payload.uid);
                    post.likes = post.lusers.length;
                }
                return state;
            }
            return state;
        })
        return state;
    }

    if (action.type === COMMENT) {
        state.map((post) => {
            if (post.pid === action.payload.pid) {
                const content = action.payload.content;
                const uid = action.payload.uid;
                post.comments.push({
                    "uid": uid,
                    "content": content
                })
            }
            return state;
        })
    }

    return state;
}

export default Reducer;

