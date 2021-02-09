import React from 'react'
import classes from './Button.module.scss'

const Button = ({children, decor, type, onClick}) => {
    const cls = [classes.container]

    if (decor === 'primary') cls.push(classes.primary)

    return (
        <button
            className={cls.join(' ')}
            onClick={onClick}
            type={type}
        >
            {children}
        </button>
    )
}

export default Button