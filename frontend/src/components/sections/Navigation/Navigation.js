import React, {useEffect} from 'react'
import classes from './Navigation.module.scss'
import Container from "../../wrappers/Container/Container"
import SmallMenu from "./SmallMenu/SmallMenu"
import MainMenu from "./MainMenu/MainMenu"
import {useSelector} from "react-redux"
import forumServices from "../../../redux/forum/forumServices";

const Navigation = () => {
    const sectionList = useSelector(state => state.forum.sectionList)
    const activeSectionPk = useSelector(state => state.forum.activeSectionPk)

    useEffect(
        () => forumServices.sectionListLoading(),
        []
    )

    const mainMenu =
        sectionList
            ? <Container mobileOff={true}>
                <div className={classes.bottom}>
                    <MainMenu
                        activePk={activeSectionPk}
                        list={sectionList}
                    />
                </div>
            </Container>
            : null

    return (
        <>
            <div className={classes.top}>
                <Container>
                    <SmallMenu/>
                </Container>
            </div>

            {mainMenu}

        </>
    )
}

export default Navigation