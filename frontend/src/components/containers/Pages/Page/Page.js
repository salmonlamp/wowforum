import React, {useEffect} from 'react'
import {useSelector} from "react-redux"
import pagesServices from "../../../../redux/pages/pagesServices"
import {CommonLoading} from 'react-loadingg'

const Page = ({slug}) => {
    const page = useSelector(state => state.pages.active)

    useEffect(() => pagesServices.fetch(slug), [slug])

    return (
        page
            ? <div>
                <h1>{page.title}</h1>
                <div className={'postBody'} dangerouslySetInnerHTML={{__html: page.text}}/>
            </div>
            : <CommonLoading/>
    )
}

export default Page