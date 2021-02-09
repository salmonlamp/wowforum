import React from 'react'
import {Link} from "react-router-dom"
import classes from './MainMenu.module.scss'

const MainMenu = ({list}) => {
    const items = Object.keys(list)
        .map((key, index) => {
                const item = list[key]
                return (
                    <li key={index} className={classes.item}>
                        <Link to={`/categories/${item.id}`} className={classes.link}>
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