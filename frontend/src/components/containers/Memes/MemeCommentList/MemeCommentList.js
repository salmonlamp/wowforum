import React, {useEffect} from 'react'
import classes from './MemeCommentList.module.scss'
import {useSelector} from "react-redux";
import MemeComment from "./MemeComment/MemeComment";
import memeServices from "../../../../redux/meme/memeServices";

const MemeCommentList = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const commentList = useSelector(state => state.memes.popupCommentList)
    const memePk = useSelector(state => state.memes.popupMemePk)

    useEffect(
        () => memeServices.commentListLoading(memePk),
        []
    )

    const items = commentList
        ? Object.keys(commentList)
            .map((key, index) => {
                    const item = commentList[key]
                    return (
                        <MemeComment
                            key={index}
                            comment={item}
                            isLogged={isLogged}
                        />
                    )
                }
            )
        : null

    return (
        <ul className={classes.list}>
            {items}
        </ul>
    )
}

export default MemeCommentList