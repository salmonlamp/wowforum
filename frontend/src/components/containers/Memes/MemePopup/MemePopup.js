import React from 'react'
import Popup from "reactjs-popup"
import classes from './MemePopup.module.scss'
import Author from "../../../ui/Author/Author"
import IconButton from "../../../ui/IconButton/IconButton"
import MemeCommentForm from "../../../forms/MemeCommentForm/MemeCommentForm"
import Container from "../../../wrappers/Container/Container"
import MemeCommentList from "../MemeCommentList/MemeCommentList"
import {CommonLoading} from 'react-loadingg'
import memeServices from "../../../../redux/meme/memeServices";
import {useSelector} from "react-redux";

const MemePopup = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const memeList = useSelector(state => state.memes.list)
    const isProsesCommentAdd = useSelector(state => state.memes.isProsesCommentAdd)
    const memePk = useSelector(state => state.memes.popupMemePk)

    const meme = memeList.find(meme => meme.id === memePk)

    return (
        memePk
            ? <Popup
                open={true}
                closeOnDocumentClick
                onClose={() => memeServices.popupClose()}
            >

                <Container>
                    <div className={classes.container}>

                        <div className={classes.imageContainer}>
                            <img className={classes.image} src={meme.image} alt={meme.title}/>
                        </div>

                        <div className={classes.communityArea}>

                            <div className={classes.metaArea}>

                                <div className={classes.authorArea}>
                                    <Author
                                        author={meme.author}
                                        level={11}
                                        publishDate={'one hour ago'}
                                    />
                                </div>

                                <h2 className={classes.title}>{meme.title}</h2>

                                <div className={classes.controls}>
                                    <IconButton
                                        className={classes.controlItem}
                                        type={'blue'}
                                        iconName={'icon-like'}
                                        text={meme['like_count']}
                                        active={meme.liked}
                                        onClick={
                                            isLogged
                                                ? () => memeServices.like(meme.id)
                                                : null
                                        }
                                    />
                                    <IconButton
                                        className={classes.controlItem}
                                        type={'blue'}
                                        iconName={'icon-share'}
                                        text={'Share'}
                                        onClick={() => console.log('Share')}
                                    />
                                </div>

                            </div>

                            <div className={classes.commentArea}>
                                <div className={classes.commentWrapper}>
                                    <MemeCommentList/>
                                </div>

                                <div className={classes.commentForm}>
                                    {
                                        isProsesCommentAdd
                                            ? <CommonLoading/>
                                            : <MemeCommentForm
                                                memePk={meme.id}
                                            />
                                    }

                                </div>

                            </div>

                        </div>
                    </div>
                </Container>

            </Popup>
            : null
    )
}

export default MemePopup