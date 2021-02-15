import {
    FORUM_CATEGORY_LIST_LOADING_FINISH,
    FORUM_CATEGORY_LIST_LOADING_START,
    FORUM_SUB_CATEGORY_POST_LIST_LOADING_FINISH,
    FORUM_SUB_CATEGORY_POST_LIST_LOADING_START,
    FORUM_POST_COMMENT_ADD_FINISH,
    FORUM_POST_COMMENT_ADD_START,
    FORUM_POST_COMMENT_LIKE,
    FORUM_POST_LIKE,
    FORUM_POST_SINGLE_LOADING_FINISH,
    FORUM_POST_SINGLE_LOADING_START,
    FORUM_SECTION_LIST_LOADING_FINISH,
    FORUM_SECTION_LIST_LOADING_START, FORUM_SUB_CATEGORY_LIST_LOADING_FINISH,
    FORUM_SUB_CATEGORY_LIST_LOADING_START, FORUM_ALL_POST_LIST_LOADING_FINISH, FORUM_ALL_POST_LIST_LOADING_START
} from "../actionTypes"
import createAction from "../createAction"
import api from "../../api/api"


/** SECTION LIST LOADING **/
const forumSectionListLoadingStartAction = () => createAction(FORUM_SECTION_LIST_LOADING_START)
const forumSectionListLoadingFinishAction = sectionList => createAction(FORUM_SECTION_LIST_LOADING_FINISH, sectionList)

export function forumSectionListLoadingAction() {
    return async dispatch => {
        dispatch(forumSectionListLoadingStartAction())

        try {
            const response = await api.forum.sectionList()
            dispatch(forumSectionListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum section loading error', error)
        }
    }
}
/** END SECTION LIST LOADING **/


/** CATEGORY LIST LOADING **/
const forumCategoryListLoadingStartAction = sectionPk => createAction(FORUM_CATEGORY_LIST_LOADING_START, sectionPk)
const forumCategoryListLoadingFinishAction = categoryList => createAction(FORUM_CATEGORY_LIST_LOADING_FINISH, categoryList)

export function forumCategoryListLoadingAction(sectionPk) {
    return async dispatch => {
        dispatch(forumCategoryListLoadingStartAction(sectionPk))
        try {
            const response = await api.forum.categoryList(sectionPk)
            dispatch(forumCategoryListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum category loading error', error)
        }

    }
}

/** END CATEGORY LIST LOADING **/


/** SUB CATEGORY LIST LOADING **/
const forumSubCategoryListLoadingStartAction = categoryPk => createAction(FORUM_SUB_CATEGORY_LIST_LOADING_START, categoryPk)
const forumSubCategoryListLoadingFinishAction = subCategoryList => createAction(FORUM_SUB_CATEGORY_LIST_LOADING_FINISH, subCategoryList)

export function forumSubCategoryListLoading(categoryPk) {
    return async dispatch => {
        dispatch(forumSubCategoryListLoadingStartAction(categoryPk))
        try {
            const response = await api.forum.subCategoryList(categoryPk)
            dispatch(forumSubCategoryListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum subcategory loading error', error)
        }
    }
}
/** END SUB CATEGORY LIST LOADING **/


/** CATEGORY POST LIST LOADING **/
const forumSubCategoryPostListLoadingStartAction = () => createAction(FORUM_SUB_CATEGORY_POST_LIST_LOADING_START)
const forumSubCategoryPostListLoadingFinishAction = postList => createAction(FORUM_SUB_CATEGORY_POST_LIST_LOADING_FINISH, postList)

export function forumSubCategoryPostListLoadingAction(categoryPk, page, numberOnPage) {
    return async dispatch => {
        dispatch(forumCategoryPostListLoadingStartAction())

        try {
            const response = await api.forum.subCategoryPostList(categoryPk, page, numberOnPage)
            dispatch(forumCategoryPostListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('Forum post list loading error', error)
        }
    }
}

/** END CATEGORY POST LIST LOADING **/


/** FORUM ALL POSTS LOADING **/
const forumAllPostListLoadingStartAction = () => createAction(FORUM_ALL_POST_LIST_LOADING_START)
const forumAllPostListLoadingFinishAction = postList => createAction(FORUM_ALL_POST_LIST_LOADING_FINISH, postList)
export function forumAllPostListLoadingAction() {
    return async dispatch => {
        dispatch(forumAllPostListLoadingStartAction())

        try {
            const response = await api.forum.allPostList()
            dispatch(forumAllPostListLoadingFinishAction(response.data))
        } catch (error) {
            console.log('All post list loading error', error)
        }
    }
}
/** END FORUM ALL POSTS LOADING **/


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
