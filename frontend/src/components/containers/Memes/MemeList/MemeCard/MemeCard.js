import React from 'react'
import classes from './MemeCard.module.scss'
import IconButton from "../../../../ui/IconButton/IconButton"
import memeServices from "../../../../../redux/meme/memeServices";

const MemeCard = ({meme, isLogged}) => {
    return (
        <div className={classes.container}>
            <div className={classes.imageContainer}>
                <img
                    className={classes.image}
                    src={meme.image}
                    alt={meme.title}
                />
                <button
                    className={classes.openButton}
                    onClick={() => memeServices.popupOpen(meme.id)}
                />
                <div className={classes.controlArea}>

                    <IconButton
                        className={classes.controlItem}
                        type={'white'}
                        text={'Share'}
                        iconName={'icon-share'}
                        onClick={() => console.log('Share')}
                    />

                    <IconButton
                        type={'white'}
                        text={meme['like_count']}
                        iconName={'icon-like'}
                        onClick={
                            isLogged
                                ? () => memeServices.like(meme.id)
                                : null
                        }
                    />

                </div>
            </div>
            <h3 className={classes.title}>{meme.title}</h3>
        </div>
    )
}

export default MemeCard