import axiosAPI from "./axiosApi";
import {
    FORUM_CATEGORY_LIST_API_URL,
    FORUM_CATEGORY_POST_LIST_API_URL, FORUM_POST_COMMENT_API_UR, FORUM_POST_COMMENT_LIKE_API_UR,
    FORUM_POST_LIKE_API_URL,
    FORUM_POST_SINGLE_API_UR, MEME_COMMENT_API_URL
} from "../urls";

class ForumAPI {
    static async categoryList() {
        return await axiosAPI.get(FORUM_CATEGORY_LIST_API_URL)
    }

    static async categoryPostList(category_pk, page, page_size) {
        return await axiosAPI.get(FORUM_CATEGORY_POST_LIST_API_URL(category_pk), {
            page, page_size
        })
    }

    static async postLike(postPk) {
        return await axiosAPI.post(FORUM_POST_LIKE_API_URL(postPk))
    }

    static async postSingle(postPk) {
        return await axiosAPI.get(FORUM_POST_SINGLE_API_UR(postPk))
    }

    static async addComment(postPk, text, parentPk) {
        const response = await axiosAPI.post(
            FORUM_POST_COMMENT_API_UR(postPk),
        {text, parent: parentPk}
        )
        return response
    }

    static async commentLike(commentPk) {
        const response = await axiosAPI.post(FORUM_POST_COMMENT_LIKE_API_UR(commentPk))
        return response
    }

}

export default ForumAPI