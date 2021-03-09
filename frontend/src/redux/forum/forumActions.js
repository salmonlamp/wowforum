import {
    FORUM_CATEGORY_LIST_FETCH_FINISH,
    FORUM_POST_COMMENT_ADD_FINISH,
    FORUM_POST_COMMENT_ADD_START,
    FORUM_POST_COMMENT_LIKE,
    FORUM_POST_LIKE,
    FORUM_POST_SINGLE_LOADING_FINISH,
    FORUM_POST_SINGLE_LOADING_START,
    SECTION_LIST_FETCH_FINISH,
    FORUM_CATEGORY_SET_ACTIVE,
    FORUM_SUB_CATEGORY_LIST_FETCH_FINISH,
    FORUM_SUB_CATEGORY_POST_LIST_FETCH_FINISH,
    FORUM_POST_LIST_ON_HOME_PAGE_FETCH_START, FORUM_POST_LIST_ON_HOME_PAGE_FETCH_FINISH
} from "../actionTypes"
import createAction from "../createAction"
import api from "../../api/api"


/** SECTION LIST Fetch **/
export function sectionListFetchAction() {
    return async dispatch => {
        try {
            const response = await api.forum.sectionListFetch()
            dispatch(createAction(SECTION_LIST_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Forum section loading error', error)
        }
    }
}

/** END SECTION LIST Fetch **/


/** CATEGORY LIST Fetch **/
export function categoryListFetchAction(sectionPk) {
    return async dispatch => {
        try {
            const response = await api.forum.categoryList(sectionPk)
            dispatch(createAction(FORUM_CATEGORY_LIST_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Forum category loading error', error)
        }
    }
}

/** END CATEGORY LIST Fetch **/


/** SET ACTIVE CATEGORY PK **/
export const categorySetActiveAction = categoryPk => createAction(FORUM_CATEGORY_SET_ACTIVE, categoryPk)

/** END SET ACTIVE CATEGORY PK **/


/** SUB CATEGORY LIST FETCH **/
export function subCategoryListFetch(categoryPk) {
    return async dispatch => {
        try {
            const response = await api.forum.subCategoryListFetch(categoryPk)
            dispatch(createAction(FORUM_SUB_CATEGORY_LIST_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Forum subcategory loading error', error)
        }
    }
}

/** END SUB CATEGORY LIST FETCH **/


/** CATEGORY POST LIST FETCH BY subCategory **/
export function forumSubCategoryPostListFetchAction(subCategoryPk, page, numberOnPage) {
    return async dispatch => {
        try {
            const response = await api.forum.subCategoryPostList(subCategoryPk, page, numberOnPage)
            dispatch(createAction(FORUM_SUB_CATEGORY_POST_LIST_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Forum post list loading error', error)
        }
    }
}

/** END CATEGORY POST LIST FETCH BY subCategory **/


/** CATEGORY POST LIST ON HOME FETCH **/
export function forumPostListOnHomePageFetchAction(page, numberOnPage) {
    return async dispatch => {
        try {
            const response = await api.forum.postListOnHomePage(page, numberOnPage)
            dispatch(createAction(FORUM_POST_LIST_ON_HOME_PAGE_FETCH_FINISH, response.data))
        } catch (error) {
            console.log('Forum post list loading error', error)
        }
    }
}

/** END CATEGORY POST LIST ON HOME FETCH **/


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
