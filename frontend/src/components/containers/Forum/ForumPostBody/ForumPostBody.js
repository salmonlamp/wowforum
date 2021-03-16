// import EmbedContainer from "react-oembed-container/src";

require('./ForumPostBody.scss')

import React, {useEffect} from 'react'
import SimpleReactLightbox, {SRLWrapper} from 'simple-react-lightbox'


const ForumPostBody = ({body}) => {

    const toggleAccordion = event => {
        event.target.parentElement.classList.toggle('open')
    }

    useEffect(() => {
        document.addEventListener('click', function (event) {
            if (!event.target.matches('.accordionTitle')) return
            toggleAccordion(event)
        }, false)
    }, [])

    return (
        <SimpleReactLightbox>
            <SRLWrapper>
                {/*<EmbedContainer markup={body}>*/}
                    <div className={'postBody'} dangerouslySetInnerHTML={{__html: body}}/>
                {/*</EmbedContainer>*/}
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default ForumPostBody