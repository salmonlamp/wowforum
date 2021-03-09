import React from 'react'
import classes from './ForumPostPlate.module.scss'
import PublishDate from "../../../ui/PublishDate/PublishDate";
import {Link} from "react-router-dom";

const ForumPostPlate = ({post}) => {
    return (
        <div className={classes.container}>
            {
                post.image
                    ? <img className={classes.image} src={post.image}/>
                    : null
            }

            <div className={classes.info}>
                <h3 className={classes.title}>{post.title}</h3>
                {
                    post.excerpt
                        ? <p className={classes.excerpt}>{post.excerpt}</p>
                        : null
                }
                <PublishDate className={classes.publishDate} date={post['created_at']}/>
            </div>
            <Link to={`/posts/${post.id}`} className={classes.link}/>
        </div>
    )
}

export default ForumPostPlate