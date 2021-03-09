import React from 'react'
import classes from './ForumPostPreview.module.scss'
import IconButton from "../../../ui/IconButton/IconButton"
import ForumServices from "../../../../redux/forum/forumServices"
import {Link} from "react-router-dom";

const ForumPostPreview = ({post, isLogged, className, showExcerpt = false}) => {
    const cls = [className, classes.container]

    return (
        <div className={cls.join(' ')}>
            <img className={classes.image} src={post.image} alt={post.title}/>
            <Link to={`/posts/${post.id}`} className={classes.link}/>
            <div className={classes.info}>
                <div className={classes.controls}>
                    <IconButton
                        iconName={'icon-comment'}
                        type={'lightGrey'}
                        iconSize={20}
                        fontSize={16}
                        text={post['comment_count'].toString()}
                        className={classes.controlItem}
                    />

                    <IconButton
                        iconName={'icon-like'}
                        type={'lightGrey'}
                        iconSize={20}
                        fontSize={16}
                        text={post['like_count'].toString()}
                        active={post.liked}
                        onClick={
                            isLogged
                                ? () => ForumServices.postLike(post.id)
                                : null
                        }
                        className={classes.controlItem}
                    />
                </div>
                <h3 className={classes.title}>{post.title}</h3>
                {
                    showExcerpt && post.excerpt
                        ? <p className={classes.excerpt}>{post.excerpt}</p>
                        : null
                }
            </div>
        </div>
    )
}

export default ForumPostPreview