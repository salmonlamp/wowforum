import React from 'react'
import classes from './ForumPostTopRow.module.scss'
import Author from "../../../ui/Author/Author"
import PublishDate from "../../../ui/PublishDate/PublishDate"

const ForumPostTopRow = ({post}) => {
    return (
        <div className={classes.topRow}>
            <div className={classes.author}>
                <Author author={post.author}/>
            </div>
            <PublishDate date={post['created_at']}/>
        </div>
    )
}

export default ForumPostTopRow