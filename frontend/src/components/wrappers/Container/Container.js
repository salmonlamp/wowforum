import React from 'react'
import classes from './Container.module.scss'

const Container = ({children, mobileOff = false}) => {
    const cls = [classes.box]

    if (mobileOff) cls.push(classes.mobileOff)

    return (
        <div className={cls.join(' ')}>
            {children}
        </div>
    )
}

export default Container