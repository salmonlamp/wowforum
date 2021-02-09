import React from 'react'
import classes from './PublishDate.module.scss'

const PublishDate = ({date}) =>
    <div className={classes.container}>
        {date}
    </div>

export default PublishDate