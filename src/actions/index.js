//action-types

export const LIKE = 'LIKE';


//action-creators

export const setLike = (pid,uid) => {
    return {
        type: LIKE,
        payload: { pid,uid }
    }
}
