import React from 'react'
import classes from './ForumPostCommentList.module.scss'
import ForumPostCommentItem from "./ForumPostCommentItem/ForumPostCommentItem"
import {useSelector} from "react-redux";

const ForumPostCommentList = ({isSublist = false}) => {
    const comments = useSelector(state => state.forum.activePostCommentList)
    const isLogged = useSelector(state => state.auth.isLogged)

    const cls = [classes.list]
    if (isSublist) cls.push(classes.subList)

    const items = comments
        ? Object.keys(comments)
            .map((key, index) => {
                    const item = comments[key]
                    return (
                        <ForumPostCommentItem 
                            key={index}
                            comment={item} 
                            isLogged={isLogged}
                        />
                    )
                }
            )
        : null

    return (
        <ul className={cls.join(' ')}>
            {items}
        </ul>
    )
}

export default ForumPostCommentList