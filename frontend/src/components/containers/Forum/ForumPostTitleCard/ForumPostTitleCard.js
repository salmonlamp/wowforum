import React from 'react'
import classes from './ForumPostTitleCard.module.scss'
import IconButton from "../../../ui/IconButton/IconButton";
import ForumServices from "../../../../redux/forum/forumServices";
import ForumPostTopRow from "../ForumPostTopRow/ForumPostTopRow";

const ForumPostTitleCard = ({post, isLogged}) => {
    return (
        <>
            <ForumPostTopRow post={post}/>

            <div className={classes.container}>
                <div className={classes.shadow + ' ' + classes.shadowTop}>
                    <h1 className={classes.title}>{post.title}</h1>
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

                        <IconButton
                            iconName={'icon-download'}
                            type={'lightGrey'}
                            iconSize={20}
                            fontSize={16}
                            text={'Save'}
                            onClick={() => console.log('Save')}
                            className={classes.controlItem}
                        />

                        <IconButton
                            iconName={'icon-share'}
                            type={'lightGrey'}
                            iconSize={20}
                            fontSize={16}
                            text={'Share'}
                            onClick={() => console.log('Share')}
                            className={classes.controlItem}
                        />
                    </div>
                </div>

                {
                    post.excerpt
                        ? <div className={classes.shadow}>
                            <div className={classes.desc}>
                                <p>{post.excerpt}</p>
                            </div>
                        </div>
                        : null
                }

                <img className={classes.image} src={post.image} alt={post.title}/>

            </div>
        </>
    )
}

export default ForumPostTitleCard