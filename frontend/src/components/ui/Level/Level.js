import React from 'react'
import classes from './Level.module.scss'

const Level = ({level, className = ''}) => {
    const cls = [classes.container, className]

    return (
        <span className={cls.join(' ')}>
            {level}
        </span>
    )
}

export default Level