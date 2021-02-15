import React from 'react'
import {Link} from "react-router-dom"
import classes from './MainMenu.module.scss'

const MainMenu = ({list, activePk}) => {
    const items = Object.keys(list)
        .map((key, index) => {
                const item = list[key]
                const cls = [classes.item]
                if (item['id'].toString() === activePk) cls.push(classes.active)
                return (
                    <li key={index} className={cls.join(' ')}>
                        <Link to={`/sections/${item.id}`} className={classes.link}>
                            {item.name}
                        </Link>
                    </li>
                )
            }
        )

    return (
        <ul className={classes.container}>
            {items}
        </ul>
    )
}

export default MainMenu