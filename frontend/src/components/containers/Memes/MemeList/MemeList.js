import React, {useEffect} from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import {CommonLoading} from 'react-loadingg'
import MasonryGrid from "../../../wrappers/Masonry/Masonry"
import MemeCard from "./MemeCard/MemeCard"
import {useSelector} from "react-redux"
import memeServices from "../../../../redux/meme/memeServices"

const MemeList = () => {
    const isLogged = useSelector(state => state.auth.isLogged)
    const list = useSelector(state => state.memes.list)
    const hasNext = useSelector(state => state.memes.hasNext)

    useEffect(
        () => memeServices.listLoading(),
        []
    )

    const items = list
        ? Object.keys(list)
            .map((key, index) => {
                    const item = list[key]
                    return (
                        <MemeCard
                            meme={item}
                            key={index}
                            isLogged={isLogged}
                        />
                    )
                }
            )
        : null

    return (
        <InfiniteScroll
            dataLength={items.length} //This is important field to render the next data
            next={() => memeServices.listLoading()}
            hasMore={hasNext}
            loader={<CommonLoading/>}
            endMessage={
                <p style={{textAlign: 'center'}}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <MasonryGrid>
                {items}
            </MasonryGrid>
        </InfiniteScroll>
    )
}

export default MemeList