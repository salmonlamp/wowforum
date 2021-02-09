import React from 'react'
import classes from './Avatar.module.scss'

const Avatar = ({sizeType, imgUrl = null}) => {
    const cls = [classes.container]

    if (sizeType === 'big') cls.push(classes.big)
    if (sizeType === 'small') cls.push(classes.small)

    return (
        <div className={cls.join(' ')}>
            {
                imgUrl
                    ? <img className={classes.image} src={imgUrl} alt={'user avatar'}/>
                    : null
            }
        </div>
    )
}

export default Avatar