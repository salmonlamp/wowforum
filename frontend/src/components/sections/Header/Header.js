import React from 'react'
import classes from './Header.module.scss'
import Container from "../../wrappers/Container/Container"
import Logo from "../../ui/Logo/Logo"
import Search from "../../ui/Search/Search"
import Social from "../../ui/Social/Social"
import UserArea from "../../ui/UserArea/UserArea"
import Icons from "../../ui/Icons/Icons"
import {Link} from "react-router-dom"
import Navigation from "../Navigation/Navigation"

const Header = () => {
    return (
        <header className={classes.container}>

            <div className={classes.top}>
                <Container>
                    <div className={classes.topContent}>
                        <div className={classes.logoArea}>
                            <Logo/>
                        </div>

                        <div className={classes.center}>
                            <div className={classes.search}>
                                <Search/>
                            </div>
                            <div className={classes.social}>
                                <Social/>
                            </div>
                        </div>

                        <div className={classes.userArea}>
                            <UserArea/>
                        </div>

                        <div className={classes.mobileControls}>
                            <Link className={classes.mobileControlItem} to={"#"}>
                                <Icons
                                    className={classes.mobileControlIcon}
                                    name={'icon-user'}
                                    size={22}
                                />
                            </Link>
                            <button className={classes.mobileControlItem}>
                                <Icons
                                    className={classes.mobileControlIcon}
                                    name={'icon-search'}
                                    size={22}
                                />
                            </button>
                            <button
                                className={classes.mobileControlItem}
                                onClick={() => {console.log('openMenu')}}
                                // document.querySelector('#nav').classList.toggle(classes.navigationOpen)
                            >
                                <Icons
                                    className={classes.mobileControlIcon}
                                    name={'icon-burger'}
                                    size={22}
                                />
                            </button>
                        </div>

                    </div>
                </Container>
            </div>

            <nav id="nav" className={classes.navigation}>
                <Navigation/>
            </nav>

        </header>
    )
}

export default Header