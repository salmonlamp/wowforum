import React from 'react'
import classes from './Social.module.scss'
import Icons from "../Icons/Icons"
import {Link} from "react-router-dom"
import {useSelector} from "react-redux";

const Social = ({size = 14}) => {
    const siteSettings = useSelector(state => state.tuning.siteSettings)

    return (
        <ul className={classes.list}>
            {
                siteSettings.twitter
                    ? <li className={classes.item}>
                        <Icons
                            className={classes.icon}
                            name={'icon-twitter'}
                            size={size}
                        />
                        <a target={'_blank'} href={siteSettings.twitter} className={classes.link}/>
                    </li>
                    : null
            }
            {
                siteSettings.facebook
                    ? <li className={classes.item}>
                        <Icons
                            className={classes.icon}
                            name={'icon-facebook'}
                            size={size}
                        />
                        <a target={'_blank'} href={siteSettings.facebook} className={classes.link}/>
                    </li>
                    : null
            }
            {
                siteSettings.instagram
                    ? <li className={classes.item}>
                        <Icons
                            className={classes.icon}
                            name={'icon-instagram'}
                            size={size}
                        />
                        <a target={'_blank'} href={siteSettings.instagram} className={classes.link}/>
                    </li>
                    : null
            }
        </ul>
    )

}

export default Social