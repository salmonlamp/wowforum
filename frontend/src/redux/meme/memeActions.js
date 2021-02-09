import createAction from "../createAction";
import api from "../../api/api";
import {
    MEME_LIST_LOADING_START,
    MEME_LIST_LOADING_FINISH,
    MEME_LIKE,
    MEME_POPUP_OPEN,
    MEME_POPUP_CLOSE,
    MEME_COMMENT_ADD_START,
    MEME_COMMENT_LIST_LOADING_START, MEME_COMMENT_LIST_LOADING_FINISH, MEME_COMMENT_LIKE, MEME_COMMENT_ADD_FINISH
} from "../actionTypes";


/** LOADING MEME LIST **/
const memeListLoadingStartAction = () => createAction(MEME_LIST_LOADING_START)
const memeListLoadingFinishAction = memeData => createAction(MEME_LIST_LOADING_FINISH, memeData)

export function memeListLoadingAction(page, numberOnPage) {
    return async dispatch => {
        dispatch(memeListLoadingStartAction())

        try {
            const response = await api.memes.list(page, numberOnPage)
            dispatch(memeListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Memes loading error', error)
        }
    }
}
/** END LOADING MEME LIST **/

/** MEME POPUP OPEN **/
export const memePopupOpenAction = memePk => createAction(MEME_POPUP_OPEN, memePk)
export const memePopupCloseAction = () => createAction(MEME_POPUP_CLOSE)
/** END MEME POPUP OPEN **/


/** MEME ADD COMMENT **/
const memeCommentAddStartAction = () => createAction(MEME_COMMENT_ADD_START)
const memeCommentAddFinishAction = comment => createAction(MEME_COMMENT_ADD_FINISH, comment)
export function memeCommentAddAction(memePk, text) {
    return async dispatch => {
        dispatch(memeCommentAddStartAction(text))

        try {
            const response = await api.memes.addComment(memePk, text)
            dispatch(memeCommentAddFinishAction(response.data))
        } catch (error) {
            console.log('Meme comment add error', error)
        }
    }
}
/** END ADD MEME COMMENT **/

/** MEME COMMENT LIST **/
const memeCommentListLoadingStartAction = () => createAction(MEME_COMMENT_LIST_LOADING_START)
const memeCommentListLoadingFinishAction = commentList => createAction(MEME_COMMENT_LIST_LOADING_FINISH, commentList)
export function memeCommentListLoadingAction(memePk) {
    return async dispatch => {
        dispatch(memeCommentListLoadingStartAction())

        try {
            const response = await api.memes.commentList(memePk)
            dispatch(memeCommentListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Meme comment list loading error', error)
        }
    }
}
/** END MEME COMMENT LIST **/


/** MEME LIKE **/
const memeLikeStartAction = memePk => createAction(MEME_LIKE, memePk)
export function memeLikeAction(memePk) {
    return async dispatch => {
        dispatch(memeLikeStartAction(memePk))

        try {
            await api.memes.like(memePk)
        } catch (error) {
            console.log('Meme like error', error)
        }
    }
}
/** END MEME LIKE **/


/** MEME COMMENT LIKE **/
const memeCommentLikeStartAction = commentPk => createAction(MEME_COMMENT_LIKE, commentPk)

export function memeCommentLikeAction(commentPk) {
    return async dispatch => {
        dispatch(memeCommentLikeStartAction(commentPk))

        try {
            await api.memes.commentLike(commentPk)
        } catch (error) {
            console.log('Meme like error', error)
        }
    }
}
/** END MEME COMMENT LIKE **/