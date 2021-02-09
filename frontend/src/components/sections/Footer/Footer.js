import React from 'react'
import classes from './Footer.module.scss'
import Container from "../../wrappers/Container/Container"
import {Link} from "react-router-dom"
import Social from "../../ui/Social/Social";
import Chat from "../../containers/Chat/Chat";

const Footer = () => {
    return (
        <footer className={classes.container}>
            <Chat/>
            <Container>
                <div className={classes.content}>

                    <ul className={classes.menu}>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>Privacy Policy</Link>
                        </li>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>Terms Forum</Link>
                        </li>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>FAQ</Link>
                        </li>
                    </ul>

                    <ul className={classes.menu}>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>Communites</Link>
                        </li>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>About</Link>
                        </li>
                        <li className={classes.menuItem}>
                            <Link to={"#"} className={classes.menuLink}>Blog</Link>
                        </li>
                    </ul>

                    <div className={classes.right}>
                        <div className={classes.social}>
                            <Social
                                size={32}
                            />
                        </div>
                        <p className={classes.copyright}>
                            © 2020-2021
                        </p>
                    </div>

                </div>
            </Container>
        </footer>
    )
}

export default Footer