import React from 'react'
import classes from './Footer.module.scss'
import Container from "../../wrappers/Container/Container"
import {Link} from "react-router-dom"
import Social from "../../ui/Social/Social"
import Chat from "../../containers/Chat/Chat"
import {useSelector} from "react-redux"

const Footer = () => {
    const pageList = useSelector(state => state.pages.list)

    function sliceList(list, numChunks = 2) {
        if (list.length < numChunks) return list

        const chunkLen = pageList.length / numChunks | 0
        const chunks = [...Array(numChunks)].map((n, i) => {
            return pageList.slice(i * chunkLen, i === numChunks - 1 ? pageList.length : (i + 1) * chunkLen)
        })

        return chunks
    }

    function renderItems(list) {
        return Object.keys(list)
            .map((key, index) => {
                    const item = list[key]
                    return (
                        <li className={classes.menuItem} key={index}>
                            <Link to={`/pages/${item.slug}`} className={classes.menuLink}>{item.title}</Link>
                        </li>
                    )
                }
            )
    }

    function renderMenus(list) {
        const chunks = sliceList(list)

        const menus = Object.keys(chunks)
            .map((key, index) => {
                    const columnList = chunks[key]
                    return (
                        <ul className={classes.menu} key={index}>
                            {renderItems(columnList)}
                        </ul>
                    )
                }
            )
        return menus
    }

    return (
        <footer className={classes.container}>
            {/*<Chat/>*/}
            <Container>
                <div className={classes.content}>
                    {
                        pageList.length
                            ? renderMenus(pageList)
                            : null
                    }

                    <div className={classes.right}>
                        <div className={classes.social}>
                            <Social size={32}/>
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