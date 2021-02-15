import {store, dispatch} from '../store'
import {
    forumCategoryListLoadingAction,
    forumCategoryPostListLoadingAction,
    forumPostCommentAddAction,
    forumPostCommentLikeAction,
    forumPostLikeAction,
    forumPostSingleLoading,
    forumSectionListLoadingAction,
    forumSubCategoryListLoading,
    forumAllPostListLoadingAction
} from "./forumActions"

export default {
    sectionListLoading: () => dispatch(forumSectionListLoadingAction()),

    categoryListLoading: sectionPk => dispatch(forumCategoryListLoadingAction(sectionPk)),

    subCategoryListLoading: categoryPk => dispatch(forumSubCategoryListLoading(categoryPk)),

    allPostList: () => dispatch(forumAllPostListLoadingAction()),

    postLike: postPk => dispatch(forumPostLikeAction(postPk)),
    categoryPostListLoading: (categoryPk) => {
        const page = store.getState().forum.postListPage
        dispatch(forumCategoryPostListLoadingAction(categoryPk, page, 9))
    },
    postSingleLoading: postPk => dispatch(forumPostSingleLoading(postPk)),

    commentLike: commentPk => dispatch(forumPostCommentLikeAction(commentPk)),
    commentAdd: (postPk, text, parentPk = null) => dispatch(forumPostCommentAddAction(postPk, text, parentPk))
}