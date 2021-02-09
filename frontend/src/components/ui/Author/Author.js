import React from 'react'
import classes from './Author.module.scss'
import Avatar from "../Avatar/Avatar";
import Level from "../Level/Level";
import PublishDate from "../PublishDate/PublishDate";

const Author = ({author, publishDate = null, avatarSize = 'big'}) => {
    return (
        <div className={classes.container}>

            <div className={classes.avatar}>
                <Avatar
                    sizeType={avatarSize}
                />
            </div>

            <div>
                <div className={classes.topRow}>
                    <span className={classes.name}>{author.username}</span>
                    <Level
                        level={author.level || 1}
                    />
                </div>
                {
                    publishDate
                        ? <div className={classes.bottomRow}>
                            <PublishDate
                                date={publishDate}
                            />
                        </div>
                        : null
                }
            </div>

        </div>
    )
}

export default Author