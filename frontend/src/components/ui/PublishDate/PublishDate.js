import React from 'react'
import classes from './PublishDate.module.scss'

const PublishDate = ({date, className = ''}) => {
    const cls = [className, classes.container]

    return (
        <div className={cls.join(' ')}>
            {date}
        </div>
    )
}

export default PublishDate