import {
    FORUM_CATEGORY_LIST_LOADING_FINISH,
    FORUM_CATEGORY_LIST_LOADING_START,
    FORUM_CATEGORY_POST_LIST_LOADING_FINISH,
    FORUM_CATEGORY_POST_LIST_LOADING_START,
    FORUM_POST_COMMENT_ADD_FINISH,
    FORUM_POST_COMMENT_ADD_START,
    FORUM_POST_COMMENT_LIKE,
    FORUM_POST_LIKE,
    FORUM_POST_SINGLE_LOADING_FINISH,
    FORUM_POST_SINGLE_LOADING_START
} from "../actionTypes";
import createAction from "../createAction"
import api from "../../api/api"
import {dispatch} from "../store";

/** CATEGORY LIST LOADING **/
const forumCategoryListLoadingStartAction = () => createAction(FORUM_CATEGORY_LIST_LOADING_START)
const forumCategoryListLoadingFinishAction = categoryList => createAction(FORUM_CATEGORY_LIST_LOADING_FINISH, categoryList)

export function forumCategoryListLoadingAction() {
    return async dispatch => {
        dispatch(forumCategoryListLoadingStartAction())
        try {
            const response = await api.forum.categoryList()
            dispatch(forumCategoryListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum category loading error', error)
        }

    }
}

/** END CATEGORY LIST LOADING **/

/** CATEGORY POST LIST LOADING **/
const forumCategoryPostListLoadingStartAction = () => createAction(FORUM_CATEGORY_POST_LIST_LOADING_START)
const forumCategoryPostListLoadingFinishAction = postList => createAction(FORUM_CATEGORY_POST_LIST_LOADING_FINISH, postList)

export function forumCategoryPostListLoadingAction(categoryPk, page, numberOnPage) {
    return async dispatch => {
        dispatch(forumCategoryPostListLoadingStartAction())

        try {
            const response = await api.forum.categoryPostList(categoryPk, page, numberOnPage)
            dispatch(forumCategoryPostListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum post list loading error', error)
        }
    }
}

/** END CATEGORY POST LIST LOADING **/

/** POST LIKE **/
const forumPostLikeStartAction = postPk => createAction(FORUM_POST_LIKE, postPk)

export function forumPostLikeAction(postPk) {
    return async dispatch => {
        dispatch(forumPostLikeStartAction(postPk))

        try {
            const response = api.forum.postLike(postPk)
        } catch (error) {
            console.log('Forum post like error', error)
        }
    }
}

/** END POST LIKE **/


/** POST SINGLE LOADING **/
const forumPostSingleLoadingStartAction = () => createAction(FORUM_POST_SINGLE_LOADING_START)
const forumPostSingleLoadingFinishAction = postData => createAction(FORUM_POST_SINGLE_LOADING_FINISH, postData)
export function forumPostSingleLoading(postPk) {
    return async dispatch => {
        dispatch(forumPostSingleLoadingStartAction())

        try {
            const response = await api.forum.postSingle(postPk)
            dispatch(forumPostSingleLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum post single loading error', error)
        }
    }
}
/** END POST SINGLE LOADING **/

/** POST COMMENT ADD **/
const forumPostCommentAddStartAction = () => createAction(FORUM_POST_COMMENT_ADD_START)
const forumPostCommentAddFinishAction = comment => createAction(FORUM_POST_COMMENT_ADD_FINISH, comment)
export function forumPostCommentAddAction(postPk, text, parentPk = null) {
    return async dispatch => {
        dispatch(forumPostCommentAddStartAction())

        try {
            const response = await api.forum.addComment(postPk, text, parentPk)
            dispatch(forumPostCommentAddFinishAction(response.data))
        } catch (error) {
            console.log('Forum post add comment error', error)
        }
    }
}
/** END POST COMMENT ADD **/


/** POST COMMENT LIKE **/
const forumPostCommentLikeStartAction = commentPk => createAction(FORUM_POST_COMMENT_LIKE, commentPk)
export function forumPostCommentLikeAction(commentPk) {
    return async dispatch => {
        dispatch(forumPostCommentLikeStartAction(commentPk))
        try {
            const response = api.forum.commentLike(commentPk)
        } catch (error) {
            console.log('Forum post comment like error', error)
        }
    }
}
/** END POST COMMENT LIKE **/
