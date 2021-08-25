//action-types

export const LIKE = 'LIKE';
export const COMMENT = 'COMMENT';


//action-creators

export const setLike = (pid, uid) => {
    return {
        type: LIKE,
        payload: { pid, uid }
    }
}

export const setComment = (pid, uid, content) => {
    return {
        type: COMMENT,
        payload: { pid, uid, content }
    }
}
