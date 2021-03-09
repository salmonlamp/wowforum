import React from 'react'
import classes from './ForumPostCard.module.scss'
import IconButton from "../../../ui/IconButton/IconButton";
import ForumServices from "../../../../redux/forum/forumServices";
import {Link} from "react-router-dom";
import ForumPostTopRow from "../ForumPostTopRow/ForumPostTopRow";

const ForumPostCard = ({post, isLogged, isLink = false}) => {

    return (
        <div>

            <ForumPostTopRow post={post}/>

            <h1 className={classes.title}>
                {
                    isLink
                        ? <Link to={`/posts/${post.id}`} className={classes.titleLink}>
                            {post.title}
                        </Link>
                        : post.title
                }
            </h1>
            <div className={classes.controls}>

                <IconButton
                    iconName={'icon-comment'}
                    type={'blue'}
                    text={post['comment_count'].toString()}
                    className={classes.controlItem}
                />

                <IconButton
                    iconName={'icon-like'}
                    type={'blue'}
                    text={post['like_count'].toString()}
                    className={classes.controlItem}
                    active={post.liked}
                    onClick={
                        isLogged
                            ? () => ForumServices.postLike(post.id)
                            : null
                    }
                />

                <IconButton
                    iconName={'icon-download'}
                    type={'blue'}
                    text={'Save'}
                    className={classes.controlItem}
                    onClick={() => console.log('Save')}
                />

                <IconButton
                    iconName={'icon-share'}
                    type={'blue'}
                    text={'Share'}
                    className={classes.controlItem}
                    onClick={() => console.log('Share')}
                />

            </div>
            <div className={classes.imageContainer}>
                <img className={classes.thumbnail} src={post.image} alt={post.title}/>
                {
                    isLink
                        ? <Link to={`/posts/${post.id}`} className={classes.imageLink}/>
                        : null
                }
            </div>

            {
                isLink
                    ? null
                    : <div className={classes.textArea} dangerouslySetInnerHTML={{__html: post.text}}/>
            }

        </div>
    )
}

export default ForumPostCard