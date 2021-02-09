import React from 'react'
import classes from './UserArea.module.scss'
import Icons from "../Icons/Icons";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import userServices from "../../../redux/user/userServices";

const UserArea = () => {
    const auth = useSelector(state => state.auth)

    return (
        <div className={classes.container}>
            {
                auth.isLogged
                    ? <>
                        <Icons
                            className={classes.icon}
                            name={'icon-user'}
                            size={19}
                        />
                        <Link to={"/profile/settings"} className={classes.link}>
                            {auth.user.username}
                        </Link>
                        <span className={classes.separator}>/</span>
                        <button className={classes.link} onClick={userServices.logout}>
                            Logout
                        </button>
                    </>
                    : <>
                        <Icons
                            className={classes.icon}
                            name={'icon-user'}
                            size={19}
                        />
                        <Link to={"/signup"} className={classes.link}>
                            SignUp
                        </Link>
                        <span className={classes.separator}>/</span>
                        <Link to={"/login"} className={classes.link}>
                            SignIn
                        </Link>
                    </>
            }

        </div>
    )

}

export default UserArea