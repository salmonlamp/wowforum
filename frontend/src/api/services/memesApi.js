import axiosAPI from "./axiosApi";
import {MEME_COMMENT_API_URL, MEME_COMMENT_LIKE_API_URL, MEME_LIKE_API_URL, MEMES_LIST_API_URL} from "../urls";

class MemesAPI {

    static async list(page, page_size) {
        return await axiosAPI.get(MEMES_LIST_API_URL, {
            params: {page, page_size}
        })
    }

    static async commentList(memePk) {
        return await axiosAPI.get(MEME_COMMENT_API_URL(memePk))
    }

    static async addComment(memePk, text, parent = null) {
        return  await axiosAPI.post(
            MEME_COMMENT_API_URL(memePk),
            {text}
        )
    }


    static async like(memePk) {
        return await axiosAPI.post(MEME_LIKE_API_URL(memePk))
    }

    static async commentLike(commentPk) {
        return await axiosAPI.post(MEME_COMMENT_LIKE_API_URL(commentPk))
    }
}

export default MemesAPI