import React, {useEffect} from 'react'
import classes from './Navigation.module.scss'
import Container from "../../wrappers/Container/Container"
import SmallMenu from "./SmallMenu/SmallMenu"
import MainMenu from "./MainMenu/MainMenu"
import {useDispatch, useSelector} from "react-redux";
import {forumCategoryListLoadingAction} from "../../../redux/forum/forumActions";

const Navigation = () => {
    const dispatch = useDispatch()
    const forumCategoryList = useSelector(state => state.forum.categoryList)

    useEffect(
        () => {
            dispatch(forumCategoryListLoadingAction())
        },
        []
    )

    return (
        <>
            <div className={classes.top}>
                <Container>
                    <SmallMenu/>
                </Container>
            </div>

            <Container mobileOff={true}>
                {
                    forumCategoryList
                        ? <div className={classes.bottom}>
                            <MainMenu list={forumCategoryList}/>
                        </div>
                        : <></>
                }
            </Container>
        </>
    )
}

export default Navigation