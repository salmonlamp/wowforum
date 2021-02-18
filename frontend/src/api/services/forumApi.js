import axiosAPI from "./axiosApi";
import {
    FORUM_CATEGORY_LIST_API_URL,
    FORUM_CATEGORY_SUBCATEGORY_LIST_API_URL,
    FORUM_POST_COMMENT_LIKE_API_UR,
    FORUM_POST_COMMENT_LIST_API_URL,
    FORUM_POST_LIKE_API_URL,
    FORUM_POST_SINGLE_API_UR, FORUM_SECTION_LIST_API_URL,
    FORUM_SUBCATEGORY_POST_LIST_API_URL,
    FORUM_ALL_POST_LIST_API_URL
} from "../urls";

class ForumAPI {

    static async sectionList() {
        return await axiosAPI.get(FORUM_SECTION_LIST_API_URL)
    }

    static async categoryList(sectionPk) {
        return await axiosAPI.get(FORUM_CATEGORY_LIST_API_URL(sectionPk))
    }

    static async subCategoryList(categoryPk) {
        return await axiosAPI.get(FORUM_CATEGORY_SUBCATEGORY_LIST_API_URL(categoryPk))
    }

    static async subCategoryPostList(subCategoryPk, page, page_size) {
        return await axiosAPI.get(
            FORUM_SUBCATEGORY_POST_LIST_API_URL(subCategoryPk),
            {page, page_size}
        )
    }

    static async postLike(postPk) {
        return await axiosAPI.post(FORUM_POST_LIKE_API_URL(postPk))
    }

    static async postSingle(postPk) {
        return await axiosAPI.get(FORUM_POST_SINGLE_API_UR(postPk))
    }

    static async addComment(postPk, text, parentPk) {
        const response = await axiosAPI.post(
            FORUM_POST_COMMENT_LIST_API_URL(postPk),
            {text, parent: parentPk}
        )
        return response
    }

    static async commentLike(commentPk) {
        const response = await axiosAPI.post(FORUM_POST_COMMENT_LIKE_API_UR(commentPk))
        return response
    }


    static async allPostList() {
        const response = await axiosAPI.get(FORUM_ALL_POST_LIST_API_URL)
        console.log(response)
        return response
    }

}

export default ForumAPI