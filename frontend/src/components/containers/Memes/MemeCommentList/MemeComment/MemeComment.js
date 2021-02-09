import React from 'react'
import classes from './MemeComment.module.scss'
import Author from "../../../../ui/Author/Author"
import PublishDate from "../../../../ui/PublishDate/PublishDate"
import IconButton from "../../../../ui/IconButton/IconButton"
import memeServices from "../../../../../redux/meme/memeServices"

const MemeComment = ({comment, isLogged}) => {
    return (
        <li className={classes.container}>
            <div className={classes.author}>
                <Author
                    author={comment.author}
                    level={11}
                />
            </div>
            <div className={classes.text}>
                <p>{comment.text}</p>
            </div>
            <div className={classes.bottom}>
                <div className={classes.bottomLeft}>
                    <PublishDate
                        date={comment.publishDate}
                    />
                </div>
                <div className={classes.bottomRight}>
                    <IconButton
                        type={'grey'}
                        iconName={'icon-like'}
                        active={comment.liked}
                        text={comment['like_count']}
                        onClick={() => memeServices.commentLike(comment.id)}
                    />
                </div>
            </div>
        </li>
    )
}

export default MemeComment