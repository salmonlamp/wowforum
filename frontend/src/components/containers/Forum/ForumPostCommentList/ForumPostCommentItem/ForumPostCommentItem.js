import React from 'react'
import classes from './ForumPostCommentItem.module.scss'
import Author from "../../../../ui/Author/Author"
import IconButton from "../../../../ui/IconButton/IconButton"
import forumServices from "../../../../../redux/forum/forumServices"
import PublishDate from "../../../../ui/PublishDate/PublishDate"
import ForumPostCommentList from "../ForumPostCommentList"

const ForumPostCommentItem = ({comment, isLogged}) => {
    return (
        <li className={classes.container}>
            <div>
                <div className={classes.topRow}>
                    <div className={classes.author}>
                        <Author author={comment.author}/>
                    </div>
                    <IconButton
                        className={classes.like}
                        iconName={'icon-like'}
                        type={'blue'}
                        text={comment['like_count'].toString()}
                        active={comment.liked}
                        onClick={
                            isLogged
                                ? () => forumServices.commentLike(comment.id)
                                : null
                        }
                    />
                    <PublishDate date={comment['created_at']}/>
                </div>
                <div className={classes.text}>
                    {comment.text}
                </div>
            </div>
            {
                comment.children
                    ? <ForumPostCommentList comments={comment.children} isSublist={true}/>
                    : null
            }
        </li>
    )
}

export default ForumPostCommentItem