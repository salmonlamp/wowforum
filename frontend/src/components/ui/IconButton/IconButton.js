import React from 'react'
import classes from './IconButton.module.scss'
import Icons from "../Icons/Icons";
import {Link} from "react-router-dom";

const IconButton = (
    {
        iconName,
        type = 'grey',
        text = null,
        className = '',
        iconSize = 14,
        active = false,
        disable = false,
        onClick = null,
        href = null
    }
) => {
    const cls = [classes.container, className]

    switch (type) {
        case 'white': cls.push(classes.white); break
        case 'blue': cls.push(classes.blue); break
        case 'grey': cls.push(classes.grey); break
        case 'brightBlue': cls.push(classes.brightBlue); break
    }

    if (active) cls.push(classes.active)

    function clickHandler(e) {
        e.target.blur()
        onClick()
    }

    const inner = (<>
        <Icons
            className={classes.icon}
            name={iconName}
            size={iconSize}
        />
        {
            text
                ? <span className={classes.label}>{text}</span>
                : null
        }
    </>)
    const clsString = cls.join(' ')

    return (
        onClick
            ? <button className={clsString} onClick={clickHandler}>{inner}</button>
            : href
            ? <Link to={href} className={clsString}>{inner}</Link>
            : <div className={clsString}>{inner}</div>

    )
}

export default IconButton